import curry from "lodash.curry";
import { post } from "../actions";
import { Helpers } from "../util";
const { CREATE_POST, EDIT_POST, DELETE_POST } = post;

function readablePost(models = {}, action) {
  const { type, id, category, author } = action;
  const { Author: auth, Category: cat, Post } = Helpers.modelAPI(models);
  const { author: writer, category: kind, comments } = Post(id)[id];

  const addRemove = (models, id, method, category, author) => {
    const Author = auth(author);
    const Category = cat(category);
    Author[author].posts[method](id);
    Category[category].posts[method](id);
    Category["all"].posts[method](id);
    return { ...models, Author, Category };
  }

  const modPost = curry(addRemove)(models)(id);

  switch(type) {
    case CREATE_POST: {
      const create = modPost("add")(category)(author);
      create.Post[id] = { ...action };
      delete create.Post[id]["type"];
      return { ...create };
    }
    case EDIT_POST: {
      const update = modPost("add")(category)(writer);
      const { title, body, voteScore } = action;
      update.Post[id] = { ...Post(id)[id], category, body, title, voteScore };
      // update.Category[kind].posts.delete(id);
      // need to check if it's the same as it's previous state
      return { ...update };
    }
    case DELETE_POST: {
      const remove = modPost("delete")(kind)(writer);
      comments.forEach(
        id => remove.Comment[id].parentDeleted = true);
      delete remove.Post[id];
      return { ...remove }
    }
    default:
      return models;
  }
}

export default readablePost;
