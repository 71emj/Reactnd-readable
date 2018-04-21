import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Container, Divider } from "semantic-ui-react";
import { Post, FeedBack, Comment, Util } from "../components";
import { post } from "../actions";

const PostPage = props => {
  const { search } = props.location;
  const id = search ? search.match(/=(.*)$/)[1] : null;
  const article = props.Post ? props.Post[id] : {};
  // flag for data, display loading
  // when store is not initiated
  // setup warning action
  // whenever requested model, ex Post, for some reason
  // doesn't exist, fix by fetching data from server
  return (
    <Container text textAlign="left">
      <Post
        author={article.author}
        title={article.title}
        body={article.body}
        timestamp={article.timestamp}
      />
      <Divider />
      <Container textAlign="right">
        <FeedBack vote={props.create}
          voteScore={article.voteScore}
          target={article}
        />
      </Container>
      <Util.Gap size="2rem" />
      <Comment parentId={id} comments={article.comments} />
    </Container>
  );
};

const mapStateToProps = state => ({ ...state.models });
const mapDispatchToProps = ({ createPost, putPost, delPost }) =>
  dispatch => ({
    create: bindActionCreators(createPost, dispatch),
    update: bindActionCreators(putPost, dispatch),
    delete: bindActionCreators(delPost, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps(post))(PostPage);
