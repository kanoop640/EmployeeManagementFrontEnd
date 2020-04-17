import React from "react";

const Button = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <button className={props.className} onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};

export { Button };
