import React from "react";
import { Header, Divider } from "semantic-ui-react";
import Author from "./Author";
import { Gap, Paragraph } from "./utilities";

const TextBody = props => {
  return (
    <div>
      <Gap size="5rem" />
      <Header as="h1">
        {props.title ||
          `OOps it seems like we don't have content...`
        }
        <Divider />
        <Gap size="1rem" />
        <Header.Subheader children={
          <Author name={props.author} gap="1rem" />
        } />
      </Header>
      <Gap size="1rem" />
      <Paragraph children={props.body ||
        `Better check your query :(`
      } />
      <Gap size="0.5rem" />
      <Divider />
    </div>
  );
}

export default TextBody;
