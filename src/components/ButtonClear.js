import React from "react";
import "../CSS/ButtonClear.css";

const ButtonClear = (props) => (
  <div className="button-clear">
    {props.children}
  </div>
);

export default ButtonClear;