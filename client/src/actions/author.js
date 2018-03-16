export const EDIT_AUTHOR = "EDIT_AUTHOR";

export function putAuthor({ author, postID, commentID }) {
  const articleName = postID ? "postID" : "commentID";
  const article = postID || commentID;
  return {
    type: EDIT_AUTHOR,
    author,
    [articleName]: article
  };
}
