import clone from "clone";
import curry from "lodash.curry";
import { comment } from "../actions";
const { CREATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT } = comment;

const addRemove = (models, id, parentId, author, method) => {
  models.Author[author].comments[method](id);
  models.Post[parentId].comments[method](id);
  return models
}

function readableComment(state = {}, action) {
  const models = clone(state);
  const { type, id } = action;
  const modComm = curry(addRemove)(models)(id);
  switch(type) {
    case CREATE_COMMENT: {
      const { author, parentId, title, body } = action;
      const addComment = modComm(parentId)(author)("add");
      models.Comment[id] = { ...action };
      delete models.Comment[id][type];
      return { ...addComment };
    }
    case EDIT_COMMENT: {
      const { title, body } = action;
      const { parentId, author } = models.Comment[id]
      const updateComment = modComm(parentId)(author)("add");
      models.Comment[id] = { ...models.Comment[id], title, body };
      return { ...updateComment };
    }
    case DELETE_COMMENT: {
      const { author, parentId } = models.Comment[id];
      const delComment = modComm(parentId)(author)("delete");
      delete models.Comment[id];
      return { ...delComment };
    }
    default:
      return state;
  }
}

export default readableComment;
