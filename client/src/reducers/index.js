import clone from "clone";
import readablePost from "./post";
import readableComment from "./comment";
import readableCategory from "./category";

const initialState = {
  query: "",
  models: {}
};

function readableApp(state = initialState, action) {
  const type = action.type.replace(/^\w+\_/, "");
  const models = clone(state.models);
  switch(type) {
    case "MODELS":
      return {
        ...state,
        models: action.models
      }
    case "POST":
      return {
        ...state,
        models: readablePost(models, action)
      };
    case "COMMENT":
      return {
        ...state,
        models: readableComment(models, action)
      };
    case "CATEGORY":
      return {
        ...state,
        models: readableCategory(models, action)
      }
    default:
      return state;
  }
}

export default readableApp;
