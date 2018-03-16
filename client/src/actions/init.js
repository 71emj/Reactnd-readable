import init from "../util/Initialize";
export const INIT_MODELS = "INIT_MODELS";

export const initializeStore = () =>
  dispatch => init()
    .then(models =>
      dispatch(setupModels({ models })
));

function setupModels({ models }) {
  return {
    type: INIT_MODELS,
    models
  };
}
