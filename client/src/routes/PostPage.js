import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { post } from "../actions";
import { Post, FeedBack, Comment, Util } from "../components";

const PostPage = props => {
  // atm, postId is hard coded in props, next step is create url query
  // in route so that PostPage can analyze query and use it to access store
  const { postId: id } = props;
  const article = props.Post ? props.Post[id] : null;
  console.log(article);
  return (
    <Container text textAlign="left">
      <Post
        author={article && article.author}
        title={article && article.title}
        body={article && article.body}
      />
      <Container textAlign="right">
        <FeedBack vote={props.update}
          voteScore={article && article.voteScore}
          target={article && article}
        />
      </Container>
      <Util.Gap size="2rem" />
      <Comment parentId={id} comments={article && article.comments} />
    </Container>
  );
};

const mapStateToProps = state => ({ ...state.models });
const mapDispatchToProps = ({ addPost, putPost, delPost }) => dispatch => ({
  create: bindActionCreators(addPost, dispatch),
  update: bindActionCreators(putPost, dispatch),
  delete: bindActionCreators(delPost, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps(post))(PostPage);
