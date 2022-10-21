from renard.pipeline.characters_extraction import Character
from typing import Dict, Any, List, Set, Optional, Tuple, cast, Literal

import networkx as nx
import numpy as np
from more_itertools import windowed

from renard.pipeline.ner import NEREntity
from renard.pipeline.core import PipelineStep


class CoOccurencesGraphExtractor(PipelineStep):
    """A simple character graph extractor using co-occurences"""

    def __init__(
        self,
        co_occurences_dist: int,
        dynamic: Optional[Literal["nx", "gephi"]] = None,
        dynamic_window: Optional[int] = None,
        dynamic_overlap: int = 0,
    ) -> None:
        """
        :param co_occurences_dist: max accepted distance between two
            character appearances to form a co-occurence interaction,
            in number of tokens.

        :param dynamic: either ``None``, or one of ``{'nx', 'gephi'}``

                - if ``None`` (the defaul), a ``nx.graph`` is
                  extracted

                - if ``'nx'``, several ``nx.graph`` are extracted.  In
                  that case, ``dynamic_window`` and
                  ``dynamic_overlap``*can* be specified.  If
                  ``dynamic_window`` is not specified, this step is
                  expecting the text to be cut into chapters', and a
                  graph will be extracted for each 'chapter'.  In that
                  case, ``chapters`` must be passed to the pipeline as
                  a ``List[str]`` at runtime.

                - if ``'gephi'``, a single ``nx.graph`` is extracted.
                  This graph has the nice property that exporting it
                  to `gexf` format using ``G.write_gexf()`` will
                  produce a correct dynamic graph that can be read by
                  Gephi.  Because of a limitation in networkx, the
                  dynamic weight attribute is stored as ``dweight``
                  instead of ``weight``.

        :param dynamic_window: dynamic window, in number of
            interactions.  a dynamic window of `n` means that each
            returned graph will be formed by `n` interactions.

        :param dynamic_overlap: overlap, in number of interactions.
        """

        self.co_occurences_dist = co_occurences_dist

        if not dynamic is None:
            assert dynamic in {"nx", "gephi"}
            if dynamic == "nx":
                if not dynamic_window is None:
                    assert dynamic_window > 0
                    assert dynamic_window > dynamic_overlap
        self.dynamic = dynamic
        self.dynamic_window = dynamic_window
        self.dynamic_overlap = dynamic_overlap
        self.dynamic_needs_chapter = dynamic == "nx" and dynamic_window is None
        super().__init__()

    def __call__(
        self,
        text: str,
        tokens: List[str],
        bio_tags: List[str],
        characters: Set[Character],
        chapter_tokens: Optional[List[str]] = None,
        **kwargs,
    ) -> Dict[str, Any]:
        """Extract a characters graph

        :param tokens:
        :param bio_tags:
        :param characters:

        :return: a ``dict`` with key ``'characters_graph'`` and a
            ``networkx.Graph`` or a list of ``networkx.Graph`` as
            value.
        """
        assert len(tokens) == len(bio_tags)

        mentions = []
        for character in characters:
            for mention in character.mentions:
                mentions.append((character, mention))
        mentions = sorted(mentions, key=lambda cm: cm[1].start_idx)

        if self.dynamic == "gephi":
            return {"characters_graph": self._extract_gephi_dynamic_graph(mentions)}
        elif self.dynamic == "nx":
            return {
                "characters_graph": self._extract_dynamic_graph(
                    mentions,
                    self.dynamic_window,
                    self.dynamic_overlap,
                    chapter_tokens,
                )
            }
        return {"characters_graph": self._extract_graph(mentions)}

    def _extract_graph(self, mentions: List[Tuple[Character, NEREntity]]):
        """
        :param mentions: A list of character mentions, ordered by appearance
        """

        # co-occurence matrix, where C[i][j] is 1 when appearance
        # i co-occur with j if i < j, or 0 when it doesn't
        C = np.zeros((len(mentions), len(mentions)))
        for i, (char1, mention_1) in enumerate(mentions):
            # check ahead for co-occurences
            for j, (char2, mention_2) in enumerate(mentions[i + 1 :]):
                if mention_2.start_idx - mention_1.start_idx > self.co_occurences_dist:
                    # dist between current token and future token is
                    # too great : we finished co-occurences search for
                    # the current token
                    break
                # ignore co-occurences with self
                if char1 == char2:
                    continue
                # record co_occurence
                C[i][i + 1 + j] = 1

        # construct graph from co-occurence matrix
        G = nx.Graph()
        for i in range(len(mentions)):
            for j in range(len(mentions)):
                if C[i][j] == 0:
                    continue
                char1 = mentions[i][0]
                char2 = mentions[j][0]
                if not G.has_edge(char1, char2):
                    G.add_edge(char1, char2, weight=0)
                G.edges[char1, char2]["weight"] += 1

        return G

    def _extract_dynamic_graph(
        self,
        mentions: List[Tuple[Character, NEREntity]],
        window: Optional[int],
        overlap: int,
        chapter_tokens: Optional[List[str]],
    ) -> List[nx.Graph]:
        """
        .. note::

            only one of ``window`` or ``chapter_tokens`` should be specified

        :param mentions: A list of character mentions, ordered by appearance
        :param window: dynamic window, in tokens.
        :param overlap: window overlap
        :param chapter_tokens: list of tokens for each chapter.  If
            given, one graph will be extracted per chapter.
        """
        assert window is None or chapter_tokens is None

        if not window is None:
            return [
                self._extract_graph([elt for elt in ct if not elt is None])
                for ct in windowed(mentions, window, step=window - overlap)
            ]

        assert not chapter_tokens is None
        chapter_start_i = 0
        chapter_end_i = 0
        graphs = []
        for chapter in chapter_tokens:
            chapter_end_i += len(chapter)
            chapter_character_tokenidx = []
            for character, mention in mentions:
                if mention.start_idx < chapter_start_i:
                    continue
                if mention.start_idx > chapter_end_i:
                    break
                chapter_character_tokenidx.append((character, mention.start_idx))
            graphs.append(self._extract_graph(chapter_character_tokenidx))
            chapter_start_i = chapter_end_i

        return graphs

    def _extract_gephi_dynamic_graph(
        self, mentions: List[Tuple[Character, NEREntity]]
    ) -> nx.Graph:
        """
        :param mentions: A list of character mentions, ordered by appearance
        """
        # keep only longest name in graph node : possible only if it is unique
        # TODO: might want to try and get shorter names if longest names aren't
        #       unique
        characters = set([e[0] for e in mentions])

        G = nx.Graph()

        character_to_last_appearance: Dict[Character, Optional[int]] = {
            character: None for character in characters
        }

        for i, (character, mention) in enumerate(mentions):
            if not character in characters:
                continue
            character_to_last_appearance[character] = mention.start_idx
            close_characters = [
                c
                for c, last_appearance in character_to_last_appearance.items()
                if not last_appearance is None
                and mention.start_idx - last_appearance <= self.co_occurences_dist
                and not c == character
            ]
            for close_character in close_characters:
                if not G.has_edge(character, close_character):
                    G.add_edge(character, close_character)
                    G.edges[character, close_character]["start"] = i
                    G.edges[character, close_character]["dweight"] = []
                # add a new entry to the weight series according to networkx
                # source code, each entry must be of the form
                # [value, start, end]
                weights = G.edges[character, close_character]["dweight"]
                if len(weights) != 0:
                    # end of last weight attribute
                    weights[-1][-1] = i
                # value, start and end of current weight attribute
                last_weight_value = weights[-1][0] if len(weights) > 0 else 0
                G.edges[character, close_character]["dweight"].append(
                    [float(last_weight_value) + 1, i, len(mentions)]
                )

        return G

    def needs(self) -> Set[str]:
        needs = {"tokens", "bio_tags", "characters"}
        if self.dynamic_needs_chapter:
            needs.add("chapter_tokens")
        return needs

    def production(self) -> Set[str]:
        return {"characters_graph"}