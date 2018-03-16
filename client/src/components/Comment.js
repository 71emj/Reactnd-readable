import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Form from "./Form";

const type = {
  name: "Comment",
  placeholder: "Leave a comment..."
};

const Comment = props => {
  return (
    <Grid centered={true} container={true}>
      <Grid.Column largeScreen="eight" wideScreen="seven" mobile="twelve">
        <Form submit={props.submit} submitting={false} type={type} />
      </Grid.Column>
    </Grid>
  );
};

export default Comment;
