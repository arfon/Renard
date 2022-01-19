from typing import Any, Dict, Tuple, Set, List
from tqdm import tqdm


class PipelineStep:
    """An abstract pipeline step, executed sequentially

    .. note::

        The ``__call__``, ``needs`` and ``production`` methods _must_ be
        overriden by derived classes.

    .. note::

        The ``optional_needs`` method can be overriden by derived classes.

    """

    def __call__(self, text: str, **kwargs) -> Dict[str, Any]:
        raise NotImplementedError()

    def needs(self) -> Set[str]:
        raise NotImplementedError()

    def optional_needs(self) -> Set[str]:
        return set()

    def production(self) -> Set[str]:
        raise NotImplementedError()


class Pipeline:
    """A flexible NLP pipeline"""

    def __init__(self, steps: Tuple[PipelineStep, ...]) -> None:
        self.steps = steps

    def check_valid(self) -> Tuple[bool, List[str]]:
        """Check that the current pipeline can be run, which is
        possible if all steps needs are satisfied

        :return: a tuple : ``(True, [warnings])`` if the pipeline is valid,
            ``(False, [errors])`` otherwise
        """

        pipeline_state = {"text"}
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

    def __call__(self, text: str) -> Dict[str, Any]:
        """Run the pipeline sequentially

        :return: the output of the last step of the pipeline
        """
        is_valid, warnings_or_errors = self.check_valid()
        if not is_valid:
            raise ValueError(warnings_or_errors)
        for warning in warnings_or_errors:
            print(f"[warning] : {warning}")

        kwargs = {"text": text}
        tqdm_steps = tqdm(self.steps, total=len(self.steps))
        for step in tqdm_steps:
            tqdm_steps.set_description_str(f"{step.__class__.__name__}")
            kwargs = {**kwargs, **step(**kwargs)}

        return kwargs
