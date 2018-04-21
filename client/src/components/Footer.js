import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { Paragraph } from "./utilities";

const Footer = props => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    minHeight: "5rem"
  };
  return (
    <div>
      <Container text textAlign="center" style={style}>
        <Paragraph align="center" size="0.9rem" color="#696969">
          ~ © 2018 71emj | Follow Project on&nbsp;
          <a href="https://github.com/71emj/Reactnd-readable">Github</a>
          &nbsp;~
        </Paragraph>
      </Container>
    </div>
  );
};

export default Footer;
