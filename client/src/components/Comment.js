import React from "react";
import { Grid } from "semantic-ui-react";
import Form from "./Form";

const Comment = props => {
  const type = {
    name: "Comment",
    placeholder: "Leave a comment..."
  };
  return (
    <Grid centered container>
      <Grid.Column largeScreen="nine" widescreen="seven" mobile="twelve">
        <Form submit={props.submit} submitting={false} type={type} />
      </Grid.Column>
    </Grid>
  );
};

export default Comment;
