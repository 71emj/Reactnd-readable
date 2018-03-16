import ShortID from "shortid";

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

export function putPost({ id, category, title, body }) {
  return {
    type: EDIT_POST,
    id,
    category,
    title,
    body,
    timestamp: Date.now()
  };
}

export function delPost({ id }) {
  return {
    type: DELETE_POST,
    id
  };
}
