import React from "react";
import { Header, Divider } from "semantic-ui-react";
import Author from "./Author";
import { Gap, Paragraph } from "./utilities";

const TextBody = props => {
  // console.log("///",  editor.getPath());
  // console.log(editor);
  return (
    <div>
      <Gap size="0.5rem" />
      <Header as="h1">
        {props.title ||
          `OOps it seems like we don't have content...`}
        <Gap size="0.5rem" />
        <Divider />
        <Gap size="1rem" />
        <Header.Subheader children={
          <Author size="54px"
            font="h3"
            name={props.author} gap="1rem"
            time={props.timestamp}/>
          }/>
      </Header>
      <Gap size="1rem" />
      <Paragraph children={props.body ||
        `Better check your query :(`}/>
      <Gap size="0.5rem" />
    </div>
  );
}

export default TextBody;
