import ShortID from "shortid";
import { Boiler, Ajax } from "../util";

export const CREATE_COMMENT = "CREATE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

function addComment(comment) {
  return {
    type: CREATE_COMMENT,
    ...comment
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

export const createComment = payload =>
  dispatch => {
    const post = Ajax.post("comments");
    // for some reason updating vote is post instead of put request
    if ("voteScore" in payload) {
      const { id, voteScore } = payload;
      return post(id)({ option: voteScore })
        .catch(console.error.bind(console))
        .then(updated => {
          dispatch(putComment(updated));
        });
    }
    const id = ShortID.generate();
    const template = Boiler.comment(id);
    return post("")({ ...template, ...payload })
      .catch(console.error.bind(console))
      .then(comment => {
        dispatch(addComment(comment));
      });
}


export function delComment({ id }) {
  return {
    type: DELETE_COMMENT,
    id
  };
}
