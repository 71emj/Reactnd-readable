import React from "react";
import { List, Image } from "semantic-ui-react";
import { Gap, Paragraph } from "./utilities";
import { Helpers } from "../util";

const style = size => ({
  height: size,
  width: "auto"
});

const Author = props => {
  const { name, gap = "0rem", time, size, font } = props;
  const avatar = Helpers.dummyAvatar(name);
  return (
    <List horizontal>
      <List.Item style={{ display: "flex", alignItems: "center" }}>
        <Image
          circular
          verticalAlign="middle"
          style={style(size)}
          src={avatar}
        />
        <Gap inline horizontal size={gap} />
        <List.Content>
          <List.Header as={font} children={"by " + name} />
          Posted on {Helpers.parseTimestamp(time || Date.now())}
        </List.Content>
      </List.Item>
    </List>
  );
};

export default Author;
