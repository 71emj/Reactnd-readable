import { get } from "./Ajax";

function initializeStore() {
  const getCategories = get("categories");
  const getPosts = get("posts");
  const getComments = id => getPosts(id + "/comments");

  const Category = {
    all: {
      name: "all",
      path: "categories",
      posts: new Set()
    }
  };
  const Post = {};
  const Author = {};

  /* set author */
  const createAuthorEntry = (name, article) => {
    const entry = Author[article.author];
    if (entry) {
      const author = entry[name];
      if (author) {
        return author.add(article.id);
      }
      entry[name] = new Set([ article.id ]);
      return entry;
    }
    Author[article.author] = {
      id: article.author,
      [name]: new Set([ article.id ])
    };
    return Author;
  }

  return Promise
    .all([ getCategories(), getPosts() ])
    .catch(console.error.bind(console))
    .then(([{categories}, posts]) => {

      /* set categories model */
      categories.reduce((Category, cat) => {
        Category[cat.name] = {
          ...cat,
          numOfPosts: null,
          posts: new Set()
        };
        return Category;
      }, Category);

      /* set posts to model */
      posts.reduce((Post, post) => {
        Post[post.id] = { ...post };
        Category[post.category].posts.add(post.id);
        Category["all"].posts.add(post.id);
        createAuthorEntry("posts", post);
        return Post;
      }, Post);

      /* get comments related to posts */
      return Promise.all(Object.keys(Post).map(getComments));
    })
    .then(comments => {
      const pids = Object.keys(Post);
      /* set comment to model */
      console.log(comments);
      const Comment = comments.reduce((Comment, com) => {
        const pid = pids.find(key => key === (com[0] && com[0].parentId));
        if (pid) {
          Post[pid].comments = new Set(com.map(c => c.id));
        }
        com.forEach(elem => {
          Comment[elem.id] = { ...elem }
          createAuthorEntry("comments", elem);
        });
        return Comment;
      }, {});
      return { Category, Post, Comment, Author };
    });
}

export default initializeStore;
