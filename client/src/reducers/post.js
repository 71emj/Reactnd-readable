import clone from "clone";
import curry from "lodash.curry";
import { post } from "../actions";
const { CREATE_POST, EDIT_POST, DELETE_POST } = post;

const addRemove = (models, id, method, category, author) => {
  models.Author[author].posts[method](id);
  models.Category["all"].posts[method](id);
  models.Category[category].posts[method](id);
  return models;
}

function readablePost(state = {}, action) {
  const models = clone(state);
  const { type, id, category, author } = action;
  const { author: writer, category: kind, comments } = models.Post[id];

  const modPost = curry(addRemove(models)(id));
  const adder = modPost("add")(category);
  const remover = modPost("delete")(kind);

  switch(type) {
    case CREATE_POST: {
      const addPost = adder(author);
      models.Post[id] = { ...action };
      delete models.Post[id][type];
      return { ...addPost };
    }
    case EDIT_POST: {
      const updatePost = adder(writer);
      const { title, body, voteScore } = action;
      models.Post[id] = { ...models.Post[id], category, body, title, voteScore };
      models.Category[kind].posts.delete(id);
      return { ...updatePost };
    }
    case DELETE_POST: {
      const delPost = remover(writer);
      comments.forEach(
        id => models.Comment[id].parentDeleted = true);
      delete models.Post[id];
      return { ...delPost }
    }
    default:
      return state;
  }
}

export default readablePost;
