import ShortID from "shortid";
import { Boiler, Ajax } from "../util";

export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export function addPost({ author, category, title, body }) {
  const id = ShortID.generate();
  return {
    type: CREATE_POST,
    id,
    author,
    category,
    title,
    body,
    timestamp: Date.now()
  };
}

export const createPost = payload =>
  dispatch => {
    const post = Ajax.post("posts");
    if ("voteScore" in payload) {
      const { id, voteScore } = payload;
      return post(id)({ option: voteScore })
        .catch(console.error.bind(console))
        .then(updated => {
          console.log(updated);
          dispatch(putPost(updated));
        });
    }
    const id = ShortID.generate();
    const template = Boiler.post(id);
    return post("")({ ...template, ...payload })
      .catch(console.error.bind(console))
      .then(post => {
        dispatch(addPost(post));
      });
}


export function putPost({ id, category, title, body, voteScore }) {
  return {
    type: EDIT_POST,
    id,
    category,
    title,
    body,
    voteScore,
    timestamp: Date.now()
  };
}

export function delPost({ id }) {
  return {
    type: DELETE_POST,
    id
  };
}
