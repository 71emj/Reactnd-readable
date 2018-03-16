export const CREATE_CATEGORY = "CREATE_CATEGORIES";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";

export function createCat({ category }) {
  return {
    type: CREATE_CATEGORY,
    category
  };
}

export function putCat({ postID, category }) {
  return {
    type: UPDATE_CATEGORY,
    category,
    postID
  };
}
