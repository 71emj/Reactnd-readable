import React from "react";
import { List } from "semantic-ui-react";
import { Gap, UpVote, Paragraph } from "./utilities";
import { Helpers } from "../util";

const adjustMarginLeft = size => ({
  marginLeft: `${size}rem`
});

const borderLeft = {
  borderLeft: "1.5px solid darkgrey"
};

const FeedBack = props => {
  const votePost = Helpers.voteArticle(props);
  return (
    <List horizontal>
      <List.Item>
        <UpVote link purpose="up vote" click={votePost} />
        <List.Content />
      </List.Item>
      <List.Item style={adjustMarginLeft(0)}>
        <UpVote link purpose="down vote" click={votePost} />
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
  );
}

export default FeedBack;
