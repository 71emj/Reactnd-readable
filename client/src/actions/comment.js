import ShortID from "shortid";
import { Boiler } from "../util";

export const CREATE_COMMENT = "CREATE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export function addComment({ parentId, author, body }) {
  const id = ShortID.generate();
  const template = Boiler.comment(id);
  return {
    type: CREATE_COMMENT,
    ...template,
    author,
    body,
    parentId
  };
}

export function putComment({ id, voteScore, body }) {
  return {
    type: EDIT_COMMENT,
    id,
    voteScore,
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
