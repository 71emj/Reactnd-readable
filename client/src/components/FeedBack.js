import React from "react";
import { Container, List } from "semantic-ui-react";
import { Gap, UpVote, Paragraph } from "./utilities";

const adjustMarginLeft = size => ({
  marginLeft: `${size}rem`
});

const borderLeft = {
  borderLeft: "1.5px solid darkgrey"
};

const FeedBack = props => {
  return (
    <Container text textAlign="right">
      <List horizontal>
        <List.Item>
          <UpVote link purpose="up vote" onClick={props.vote}/>
          <List.Content />
        </List.Item>
        <List.Item style={adjustMarginLeft(0)}>
          <UpVote link purpose="down vote" onClick={props.vote}/>
          <List.Content verticalAlign="bottom" />
        </List.Item>
        <List.Item style={adjustMarginLeft(0.5)}>
          <List.Content style={borderLeft}>
            <List.Header>
              <Gap horizontal inline size="0.5rem" />
              UPVOTES
            </List.Header>
            <Gap horizontal inline size="0.5rem" />
            score: <span>{props.voteScore || 0}</span>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
};

export default FeedBack;
