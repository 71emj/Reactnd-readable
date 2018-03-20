import React from "react";
import { Comment, Icon, Accordion } from "semantic-ui-react";
import { Author } from "./Author";
import { Gap } from "./utilities";
import { Helpers } from "../util";

const CommentBody = props => {
  const { edit, vote, comment } = props;
  const { author, body, timestamp: t, voteScore } = comment;
  const avatar = Helpers.dummyAvatar(author);
  const voteComment = Helpers.voteArticle({
    target: comment,
    vote,
    voteScore
  });
  const editComment = evt => {
    props.edit({
      ...props.comment,
      body: "Comments are cool, and I just changed it"
    });
  };
  return (
    <Comment>
      <Comment.Avatar src={avatar} />
      <Comment.Content>
        <Comment.Author as="a">{author || "Anonymous"}</Comment.Author>
        <Comment.Metadata>
          {Helpers.parseTimestamp(t)} |
          <Gap />
          vote: {voteScore} |
          <Gap />
          <Icon className="outline" name={`${!voteScore
            ? "meh"
            : voteScore > 0
            ? "smile"
            : "frown"}`} />
        </Comment.Metadata>
        <Comment.Text>{body}</Comment.Text>
        <Comment.Actions>
          <Comment.Action onClick={editComment}>
            <Icon corner name="write" />
            Edit
          </Comment.Action>
          <Comment.Action data-value="1" onClick={voteComment}>
            Like
          </Comment.Action>
          <Comment.Action data-value="-1" onClick={voteComment}>
            Dislike
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default CommentBody;
