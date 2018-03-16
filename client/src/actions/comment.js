import ShortID from "shortid";

export const CREATE_COMMENT = "CREATE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export function addComment({ parentId, author, title, body }) {
  const id = ShortID.generate();
  return {
    type: CREATE_COMMENT,
    author,
    parentId,
    id,
    title,
    body,
    timestamp: Date.now()
  };
}

export function postComment({ id, text, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    text,
    body,
    timestamp: Date.now()
  };
}

export function delComment({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  };
}
