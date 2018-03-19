import init from "../util/Initialize";
export const INIT_MODELS = "INIT_MODELS";

export const initializeStore = () =>
  dispatch => init()
    .catch(console.error.bind(console))
    .then(models =>
      dispatch(setupModels({ models })
));

function setupModels({ models }) {
  return {
    type: INIT_MODELS,
    models
  };
}
