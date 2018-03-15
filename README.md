# Reactnd-readable

### Thoughts on designing client model with redux store
Based on requirement we can easily know that there are four important metrics, "category", "post", "author", and "comment", that plays in the model design.

In a relational world the relationship between these metrics can be described as following:
* Category.hasMany(Post)
* Author.hasMany(Post)
* Author.hasMany(Comment)
* Post.hasMany(Comment)
or in reverse
* Post.hasOne(Category)
* Post.hasOne(Author)
* Comment.hasOne(Author)
* Comment.hasOne(Post)

With the relationship map out we can easily design our model to look something like this,
```js
store: {
  categories: { // by category type
    "politics": {
      category: "politics",
      number: Number,
      postID: [ ... ]
    },
    "technology": {
      category: "technology",
      number: Number,
      postID: [ ... ]
    },
    "sports": {
      category: "sports",
      number: Number,
      postID: [ ... ]
    }
    ...
  },
  posts: { // by postID
    "pid01": {
      id: "pid01",
      body: "lorem ipsum",
      author: "71emj",
      category: "sports",
      comments: [ ... ],
      upvotes: Number,
      timestamp: Date.now()
    },
    "pid02": {
      id: "pid02",
      body: "lorem ipsum",
      author: "71emj",
      category: "technology",
      comments: [ ... ],
      upvotes: Number,
      timestamp: Date.now()
    },
    ...
  },
  authors: { // by userID or username
    "71emj": {
      id: "71emj",
      posts: [ ... ],
      comments: [ ... ]
    },
    "timjeng": {
      id: "timjeng",
      posts: [ ... ],
      comments: [ ... ]
    },
    ...
  },
  comments: { // by commentID
    "cid01": {
      id: "cid01",
      body: "lorem ipsum",
      author: "71emj",
      post: "pid01",
      upvotes: Number,
      timestamp: Date.now()
    },
    "cid02": {
      id: "cid02",
      body: "lorem ipsum",
      author: "timjeng",
      post: "pid01",
      upvotes: Number,
      timestamp: Date.now()
    },
    ...
  }
}
```
