export const category = name => ({
  name,
  path: "",
  posts: new Set()
});

export const post = id => ({
  id,
  title: "",
  body: "",
  author: "",
  category: "",
  comments: new Set(),
  voteScore: 0,
  timestamp: Date.now()
});

export const author = id => ({
  id,
  posts: new Set(),
  comments: new Set()
});

export const comment = id => ({
  id,
  body: "",
  author: "",
  parentId: "",
  voteScore: 0,
  timestamp: Date.now(),
  deleted: false,
  parentDeleted: false
});
