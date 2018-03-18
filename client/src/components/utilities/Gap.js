import React from "react";

const Gap = props => {
  const { horizontal, size, inline } = props;
  const direction = horizontal ? { width: `${size}` } : { height: `${size}` };
  const display = inline ? { display: "inline-block" } : { diplay: "block" };
  const style = { ...direction, ...display };
  return (
    <div style={style}></div>
  );
}

export default Gap;
