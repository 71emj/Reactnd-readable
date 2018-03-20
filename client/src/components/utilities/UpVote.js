import React from "react";
import { Icon } from "semantic-ui-react";

const UpVote = props => {
  const { purpose, size, link, click } = props;
  const name = purpose ? purpose.replace(/^(up|down).*$/, "$1") : "up";
  const value = name === "up" ? 1 : -1;
  return (
    <Icon circular size={size || "big"} link={link}
      name={`thumbs outline ${name}`}
      data-value={value}
      onClick={click}
    />
  );
};

export default UpVote;
