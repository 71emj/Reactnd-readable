import * as Actions from "../actions";

describe("Different actions will return correct form of objects", () => {

  const author = "71emj";
  const category = "react";
  const title = "Is react + redux a MVVM architecture?";
  const body = "lorem ipsum";

  let comment, post;
  beforeAll(() => {
    comment = Actions.comment;
    post = Actions.post;
  });

  test("add/del comment will return objects containing author/id/commentID", () => {
    const parentId = "Hello";
    const params = { parentId, author, body, title };
    /* testing addComment */
    expect(
      comment.addComment(params)
    ).toHaveProperty("type", "CREATE_COMMENT");
    expect(
      comment.addComment(params)
    ).toHaveProperty("title", title);
    expect(
      comment.addComment(params)
    ).toHaveProperty("body", body);
    expect(
      comment.addComment(params)
    ).toHaveProperty("author", author);
    expect(
      comment.addComment(params)
    ).toHaveProperty("parentId", "Hello");

    const commentID = comment.addComment(params).id;
    expect(commentID).toBeTruthy();
    /* testing delComment */
    expect(
      comment.delComment({ id: commentID })
    ).toEqual({ type: "DELETE_COMMENT", id: commentID });
  });

  test("add/del post will return objects containing author/category/id", () => {
    const params = { category, author, body, title };
    /* testing addPost */
    expect(
      post.addPost(params)
    ).toHaveProperty("type", "CREATE_POST");
    expect(
      post.addPost(params)
    ).toHaveProperty("title", title);
    expect(
      post.addPost(params)
    ).toHaveProperty("body", body);
    expect(
      post.addPost(params)
    ).toHaveProperty("author", author);
    expect(
      post.addPost(params)
    ).toHaveProperty("category", category);

    const id = post.addPost(params).id;
    expect(id).toBeTruthy();
    /* testing delPost */
    expect(
      post.delPost({ id })
    ).toEqual({ type: "DELETE_POST", id });
  });

});
