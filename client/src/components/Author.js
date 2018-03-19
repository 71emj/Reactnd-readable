import React from "react";
import { List, Image } from "semantic-ui-react";
import { Gap, Paragraph } from "./utilities";
import { Helpers } from "../util";

// "https://dummyimage.com/600x400/97cccf/ff006f&text=T"
// need to work out a simple algorithm to generate diff image base on Author's firstname
const style = {
  "height": "60px",
  "width": "auto"
};

const Author = props => {
  const { name, gap = "0rem", image } = props;
  const avatar = Helpers.dummyAvatar(name);
  return (
    <List horizontal>
      <List.Item>
        <Image circular verticalAlign="middle" style={style}
          src={image || avatar} />
        <Gap inline horizontal size={gap}/>
        <List.Content>
          <List.Header as="h3" children={"by " + name} />
          Created at {"3/16/2018 4:28p"}
        </List.Content>
      </List.Item>
    </List>
  )
}

export default Author;
