import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Header, Button, Icon, Image, Dimmer, Segment } from "semantic-ui-react";
import Author from "./Author";
import { Gap, Paragraph } from "./utilities";
import { Helpers } from "../util";

const style = {
  height: "60px",
  width: "auto"
};

const trimText = p => p.match(/^[^.]*\./).join(" ") + "..";

class Preview extends Component {
  state = {}

  toggleDimmer = () => this.setState({ active: !this.state.active });

  render() {
    const { active } = this.state;
    const { author, timestamp, body, id: pid } = this.props.post;
    return (
      <Dimmer.Dimmable fluid as={Card} onMouseEnter={this.toggleDimmer}>
        <Dimmer as={Segment} inverted active={active} onMouseLeave={this.toggleDimmer}>
          <Gap size="3.35rem" />
          <Link to={{
              pathname: "./post",
              search: Helpers.stringifyQuery({ pid })}}>
            <Paragraph size="1.35rem" color="#696969">Read More</Paragraph>
          </Link>
          <Card.Content />
        </Dimmer>
        <Card.Content>
          <Gap size="0.5rem" />
          <Card.Description>{trimText(body)}</Card.Description>
          <Gap size="0.5rem" />
        </Card.Content>
        <Card.Content>
          <Author
            size="28px"
            font="h4"
            name={author}
            gap="1rem"
            time={timestamp}
          />
        </Card.Content>
      </Dimmer.Dimmable>
    );
  }
}

export default Preview;
