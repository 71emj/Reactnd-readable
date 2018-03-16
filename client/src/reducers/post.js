import clone from "clone";
import { post } from "../actions";
const { CREATE_POST, EDIT_POST, DELETE_POST } = post;

const addRemove = (models, id) => category => author => method => {
  models.Author[author].posts[method](id);
  models.Category["all"].posts[method](id);
  models.Category[category].posts[method](id);
  return models;
}

function readablePost(state = {}, action) {
  const models = clone(state);
  const { type, id } = action;
  const modPost = addRemove(models, id);
  switch(type) {
    case CREATE_POST: {
      const { author, category, title, body } = action;
      const addPost = modPost(category)(author)("add");
      models.Post[id] = { ...action };
      delete models.Post[id][type];
      return { ...addPost };
    }
    case EDIT_POST: {
      const { title, body, category } = action;
      const { category: prevCat, author } = models.Post[id];
      const updatePost = modPost(category)(author)("add");
      models.Post[id] = { ...models.Post[id], category, body, title };
      models.Category[prevCat].posts.delete(id);
      return { ...updatePost };
    }
    case DELETE_POST: {
      const { author, category, comments } = models.Post[id];
      const delPost = modPost(category)(author)("delete");
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
