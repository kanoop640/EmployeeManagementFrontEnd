import React from "react";
import "../../assets/css/logo.css";
const Logo = (props) => {
  return (
    <div className="imgHeader">
      <img src={props.src} alt={props.alt} className="imgStyle" />
    </div>
  );
};

export { Logo };
