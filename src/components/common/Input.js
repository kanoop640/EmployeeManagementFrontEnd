import React from "react";

const Input = (props) => {
  const handleEvent = (event) => {
    props.textChange(event);
  };
  return (
    <div className="form-group">
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        onChange={handleEvent}
        value={props.value}
      />
    </div>
  );
};

export { Input };
