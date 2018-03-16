import clone from "clone";
import { category } from "../actions";
const { CREATE_CATEGORY, UPDATE_CATEGORY } = category;

function readableCat(state = {}, action) {
  const models = clone(state);
  const { type, category } = action;
  switch (type) {
    case CREATE_CATEGORY:
      return models;
    case UPDATE_CATEGORY:
      return models;
    default:
      return state
  }
}

export default readableCat;
