import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { post } from "../actions";
import { Post, FeedBack, Comment } from "../components";

const PostPage = props => {
  // atm, postId is hard coded in props, next step is create url query
  // in route so that PostPage can analyze query and use it to access store
  const article = props.Post ? props.Post[props.postId] : null;
  console.log(article);
  return (
    <div>
      <Post
        author={article && article.author}
        title={article && article.title}
        body={article && article.body}
      />
      <FeedBack vote={props.update} voteScore={article && article.voteScore} />
      <Comment />
    </div>
  );
};

const mapStateToProps = state => ({ ...state.models });
const mapDispatchToProps = ({ addPost, putPost, delPost }) => dispatch => ({
  create: bindActionCreators(addPost, dispatch),
  update: bindActionCreators(putPost, dispatch),
  delete: bindActionCreators(delPost, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps(post))(PostPage);
