# Reactnd-readable

### Thoughts on designing client model with redux store
Based on requirement we can easily know that there are four important metrics, "category", "post", "author", and "comment", that plays in the model design.

In a relational world the relationship between these metrics can be described as following:
* Category.hasMany(Post)
* Author.hasMany(Post)
* Author.hasMany(Comment)
* Post.hasMany(Comment)

Or in reverse
* Post.hasOne(Category)
* Post.hasOne(Author)
* Comment.hasOne(Author)
* Comment.hasOne(Post)

With the relationship map out we can easily design our model to look something like this,
```js
store: {
  categories: { // by category type
    "all" : {
      name: String,
      path: "categories",
      posts: Set // contains all posts regardless of category
    },
    "react": {
      name: String,
      path: String,
      posts: Set
    },
    ...
  },
  posts: { // by postID
    "pid01": {
      id: UUID,
      title: String,
      body: String,
      author: String,
      category: String,
      comments: Set,
      upVotes: Number,
      timestamp: Date.now()
    },
    ...
  },
  authors: { // by userID or username
    "71emj": {
      id: String,
      posts: Set,
      comments: Set
    },
    ...
  },
  comments: { // by commentID
    "cid01": {
      id: UUID,
      title: String,
      body: String,
      author: String,
      post: UUID,
      upVotes: Number,
      timestamp: Date.now()
    },
    ...
  }
}
```
