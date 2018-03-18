import React from "react";
import { Button, Icon } from "semantic-ui-react";

const UpVote = props => {
  const { purpose, size, link } = props;
  const name = purpose ? purpose.replace(/^(up|down).*$/, "$1") : "up";
  return (
    <Icon circular size={size || "big"}
      link={link} name={`thumbs outline ${name}`} />
  );
};

export default UpVote;
