import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Comment, Divider, Header } from "semantic-ui-react";
import { comment } from "../actions";
import CommentBody from "./CommentBody";
import { Gap } from "./utilities";
import Form from "./Form";

const type = {
  name: "Comment",
  placeholder: "Leave a comment..."
};

const CommentSection = props => {
  const { comments: coms, parentId } = props;
  const comments = coms ? Array.from(coms) : [];

  const createComment = evt => {
    const formChild = Array.from(evt.target).slice(0, evt.target.length -1);
    const inputValue = formChild.reduce((update, child) => {
      update[child.name] = child.value;
      return update;
    }, {});
    const newComment = { parentId, ...inputValue };
    props.create(newComment);
  }
  return (
    <div>
      <Comment.Group>{comments.map((id, i) => (
        <CommentBody key={i}
          comment={props.Comment[id]}
          edit={props.update}
          vote={props.create}
        ></CommentBody>))}
      </Comment.Group>
      <Gap size="2rem"/>
      <Header>
        Leave a comment:
      </Header>
      <Divider />
      <Gap size="0.5rem"/>
      <Form purpose="comment"
        submit={createComment}
        submitting={false}
        type={type}
      />
      <Gap size="1rem"/>
      <Divider />
    </div>
  );
};

const mapStateToProps = state => ({ ...state.models });
const mapDispatchToProps = ({createComment, putComment, delComment}) =>
  dispatch => ({
    create: bindActionCreators(createComment, dispatch),
    update: bindActionCreators(putComment, dispatch),
    delete: bindActionCreators(delComment, dispatch)
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps(comment)
)(CommentSection);
