import curry from "lodash.curry";
import { comment } from "../actions";
import { Helpers } from "../util";
const { CREATE_COMMENT, EDIT_COMMENT, DELETE_COMMENT } = comment;

function readableComment(models = {}, action) {
  const { type, id, author, parentId, body } = action;
  const { Author: auth, Post: post, Comment } = Helpers.modelAPI(models);
  const { parentId: pid, author: writer } = Comment(id)[id];

  const addRemove = (models, id, method, category, author) => {
    const Author = auth(author);
    const Post = post(parentId);
    Author[author].comments[method](id);
    Post[parentId].comments[method](id);
    return { ...models, Author, Post };
  }

  const modComm = curry(addRemove)(models)(id);

  switch(type) {
    case CREATE_COMMENT: {
      const create = modComm("add")(parentId)(author);
      create.Comment[id] = { ...action };
      delete create.Comment[id]["type"];
      return { ...create };
    }
    case EDIT_COMMENT: {
      const update = modComm("add")(pid)(writer);
      const { body, voteScore } = action;
      update.Comment[id] = { ...Comment(id)[id], body, voteScore };
      return { ...update };
    }
    case DELETE_COMMENT: {
      const remove = modComm("delete")(pid)(writer);
      delete remove.Comment[id];
      return { ...remove };
    }
    default:
      return models;
  }
}

export default readableComment;
