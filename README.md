#Reactnd-readable

### Thoughts on designing client model in redux store
Based on requirement we can easily know that there are four important metrics that plays in model design.
In order to maximize the relationship between each of these metrics we can simply listed out as following:
The four metrics are "category", "post", "author", and "comment":
```js
model: {
  category: { // by category type
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
  post: { // by postID
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
  author: { // by userID or username
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
