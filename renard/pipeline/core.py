from __future__ import annotations
from dataclasses import dataclass
from typing import (
    Any,
    Callable,
    Dict,
    Literal,
    Tuple,
    Set,
    List,
    Optional,
    Union,
    TYPE_CHECKING,
)
import math, os

from tqdm import tqdm
from transformers.tokenization_utils_base import BatchEncoding
import networkx as nx

from renard.plot_utils import draw_nx_graph_reasonably
from renard.graph_utils import cumulative_graph

if TYPE_CHECKING:
    from renard.pipeline.characters_extraction import Character
    from renard.pipeline.corefs.bert_corefs import CoreferenceMention


class PipelineStep:
    """An abstract pipeline step

    .. note::

        The ``__call__``, ``needs`` and ``production`` methods _must_ be
        overriden by derived classes.

    .. note::

        The ``optional_needs`` method can be overriden by derived classes.

    """

    def __init__(self) -> None:
        self.progress_report = "tqdm"

    def __call__(self, text: str, **kwargs) -> Dict[str, Any]:
        raise NotImplementedError()

    def needs(self) -> Set[str]:
        """
        :return: a `set` of state attributes needed by this
            :class:`PipelineStep`. This method must be overriden
            by derived classes.
        """
        raise NotImplementedError()

    def optional_needs(self) -> Set[str]:
        """
        :return: a `set` of state attributes optionally neeeded by this
            :class:`PipelineStep`. This method can be overriden by derived
            classes.
        """
        return set()

    def production(self) -> Set[str]:
        """
        :return: a `set` of state attributes produced by this
            :class:`PipelineStep`. This method must be overriden
            by derived classes.
        """
        raise NotImplementedError()


@dataclass
class PipelineState:
    """The state of a pipeline, annotated in a :class:`Pipeline` lifetime"""

    #: input text
    text: Optional[str]

    #: text split into chapters
    chapters: Optional[List[str]] = None

    #: text splitted in tokens
    tokens: Optional[List[str]] = None
    #: text splitted in tokens, by chapter
    chapter_tokens: Optional[List[List[str]]] = None
    #: word piece tokens, for BERT-like models
    wp_tokens: Optional[List[str]] = None

    #: BIO NER tags, aligned with ``self.tokens``
    bio_tags: Optional[List[str]] = None
    #: BIO NER tags, aligned with ``self.wp_tokens``
    wp_bio_tags: Optional[List[str]] = None
    #: BERT batch encodings
    bert_batch_encoding: Optional[BatchEncoding] = None

    #: coreference chains
    corefs: Optional[List[List[CoreferenceMention]]] = None

    #: detected characters
    characters: Optional[Set[Character]] = None

    #: characters graph
    characters_graph: Optional[Union[List[nx.Graph], nx.Graph]] = None

    @staticmethod
    def graph_with_names(
        G: nx.Graph,
        name_style: Union[
            Literal["longest", "shortest"], Callable[[Character], str]
        ] = "longest",
    ) -> nx.Graph:
        """Relabel a characters graph, using a single name for each
        node

        :param name_style: characters name style in the resulting
            graph.  Either a string (``'longest`` or ``shortest``) or
            a custom function associating a character to its name
        """
        if name_style == "longest":
            name_style_fn = lambda character: character.longest_name()
        elif name_style == "shortest":
            name_style_fn = lambda character: character.shortest_name()
        else:
            name_style_fn = name_style

        return nx.relabel_nodes(
            G,
            {character: name_style_fn(character) for character in G.nodes()},  # type: ignore
        )

    def export_graph_to_gexf(
        self,
        path: str,
        name_style: Union[
            Literal["longest", "shortest"], Callable[[Character], str]
        ] = "longest",
    ):
        """Export characters graph to Gephi's gexf format

        :param path: export file path
        :param name_style: see :func:`PipelineState.graph_with_names`
            for more details
        """
        if not isinstance(self.characters_graph, nx.Graph):
            raise RuntimeError(
                f"characters graph cant be exported : {self.characters_graph}"
            )
        G = self.graph_with_names(self.characters_graph, name_style)
        nx.write_gexf(G, path)

    def draw_graphs_to_dir(
        self,
        directory: str,
        name_style: Union[
            Literal["longest", "shortest"], Callable[[Character], str]
        ] = "longest",
    ):
        """Draw ``self.character_graph`` using reasonable default
        parameters, and save the produced figures in the specified
        directory.

        :param name_style: see :func:`PipelineState.graph_with_names`
            for more details
        """
        import matplotlib.pyplot as plt

        assert not self.characters_graph is None
        if isinstance(self.characters_graph, nx.Graph):
            raise ValueError("this function is supposed to be used on a dynamic graph")

        directory = directory.rstrip("/")
        os.makedirs(directory, exist_ok=True)
        for i, G in enumerate(self.characters_graph):
            fig, ax = plt.subplots()
            G = self.graph_with_names(G, name_style=name_style)
            draw_nx_graph_reasonably(G, ax=ax)
            plt.savefig(f"{directory}/{i}.png")

    def draw_graph_to_file(
        self,
        path: str,
        name_style: Union[
            Literal["longest", "shortest"], Callable[[Character], str]
        ] = "longest",
    ):
        """Draw ``self.character_graph`` using reasonable parameters,
        and save the produced figure to a file

        :param name_style: see :func:`PipelineState.graph_with_names`
            for more details
        """
        import matplotlib.pyplot as plt

        assert not self.characters_graph is None
        if isinstance(self.characters_graph, list):
            raise ValueError("this function is supposed to be used on a static graph")

        G = self.graph_with_names(self.characters_graph, name_style=name_style)
        draw_nx_graph_reasonably(G)
        plt.savefig(path)

    def draw_graph(
        self,
        name_style: Union[
            Literal["longest", "shortest"], Callable[[Character], str]
        ] = "longest",
        fig: Optional["matplotlib.pyplot.Figure"] = None,
        cumulative: bool = False,
    ):
        """Draw ``self.characters_graph`` using reasonable default
        parameters

        :param name_style: see :func:`PipelineState.graph_with_names`
            for more details
        :param fig: if specified, this matplotlib figure will be used
            for drawing
        :param cumulative: if ``True`` and ``self.characters_graph``
            is dynamic, draw a cumulative graph instead of a
            sequential one
        """
        import matplotlib.pyplot as plt
        from matplotlib.widgets import Slider

        assert not self.characters_graph is None

        if isinstance(self.characters_graph, nx.Graph):
            G = self.graph_with_names(self.characters_graph, name_style)
            ax = None
            if not fig is None:
                ax = fig.add_subplot(111)
            draw_nx_graph_reasonably(G, ax=ax)

        elif isinstance(self.characters_graph, list):
            if fig is None:
                fig, ax = plt.subplots()
            else:
                ax = fig.add_subplot(111)
            assert not fig is None

            def update(slider_value):

                assert isinstance(self.characters_graph, list)

                characters_graphs = self.characters_graph
                if cumulative:
                    # PERF: cumulative_graph is reconstructed every
                    # time the slider is moved
                    characters_graphs = cumulative_graph(self.characters_graph)

                G = self.graph_with_names(
                    characters_graphs[int(slider_value) - 1], name_style
                )

                ax.clear()
                draw_nx_graph_reasonably(G, ax)

            slider_ax = fig.add_axes([0.1, 0.05, 0.8, 0.04])
            # HACK: we save the slider to the figure. This ensure the
            # slider is still alive at drawing time.
            fig.slider = Slider(
                ax=slider_ax,
                label="Graph",
                valmin=1,
                valmax=len(self.characters_graph),
                valstep=[i + 1 for i in range(len(self.characters_graph))],
            )
            fig.slider.on_changed(update)

            update(1)

        else:
            raise RuntimeError


class Pipeline:
    """A flexible NLP pipeline"""

    def __init__(
        self, steps: List[PipelineStep], progress_report: Optional[str] = "tqdm"
    ) -> None:
        """
        :param steps: a ``tuple`` of :class:``PipelineStep``, that will be executed in order
        :param progress_report: if ``tqdm``, report the pipeline progress using tqdm. Otherwise,
            does not report progress. This sets the ``progress_report`` attribute for all steps.
        """
        self.steps = steps
        self.progress_report = progress_report
        for step in self.steps:
            step.progress_report = progress_report

    def check_valid(self, *args) -> Tuple[bool, List[str]]:
        """Check that the current pipeline can be run, which is
        possible if all steps needs are satisfied

        :param args: list of additional attributes to add to the
            starting pipeline state.

        :return: a tuple : ``(True, [warnings])`` if the pipeline is
                 valid, ``(False, [errors])`` otherwise
        """

        pipeline_state = set(args).union({"text"})
        warnings = []

        for i, step in enumerate(self.steps):

            if not step.needs().issubset(pipeline_state):
                return (
                    False,
                    [
                        f"step {i + 1} ({step.__class__.__name__}) has unsatisfied needs (needs : {step.needs()}, available : {pipeline_state})"
                    ],
                )

            if not step.optional_needs().issubset(pipeline_state):
                warnings.append(
                    f"step {i + 1} ({step.__class__.__name__}) has unsatisfied optional needs : (optional needs : {step.optional_needs()}, available : {pipeline_state})"
                )

            pipeline_state = pipeline_state.union(step.production())

        return (True, warnings)

    def __call__(self, text: Optional[str], **kwargs) -> PipelineState:
        """Run the pipeline sequentially

        :return: the output of the last step of the pipeline
        """
        is_valid, warnings_or_errors = self.check_valid(*kwargs.keys())
        if not is_valid:
            raise ValueError(warnings_or_errors)
        for warning in warnings_or_errors:
            print(f"[warning] : {warning}")

        state = PipelineState(text, **kwargs)

        if self.progress_report == "tqdm":
            steps = tqdm(self.steps, total=len(self.steps))
        else:
            steps = self.steps

        for step in steps:

            if isinstance(steps, tqdm):
                steps.set_description_str(f"{step.__class__.__name__}")

            out = step(**state.__dict__)
            for key, value in out.items():
                setattr(state, key, value)

        return state
