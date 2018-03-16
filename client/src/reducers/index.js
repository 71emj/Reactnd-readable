import init from "../util/Initialize";
import readablePost from "./post";
import readableComment from "./comment";
import readableCategory from "./category";

const initialState = {
  query: "",
  test: new Set(["hello", "world"]),
  models: {}
};

function readableApp(state = initialState, action) {
  const type = action.type.replace(/^\w+\_/, "");
  switch(type) {
    case "MODELS":
      console.log(action.models)
      return {
        ...state,
        models: action.models
      }
    case "POST":
      return {
        ...state,
        models: readablePost(state.models, action)
      };
    case "COMMENT":
      return {
        ...state,
        models: readableComment(state.models, action)
      };
    case "CATEGORY":
      return {
        ...state,
        models: readableCategory(state.models, action)
      }
    default:
      return state;
  }
}

export default readableApp;
