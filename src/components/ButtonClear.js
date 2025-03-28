import React from "react";
import "../CSS/ButtonClear.css";

const ButtonClear = (props) => (
  <div 
  className="button-clear" 
  onClick={props.operatorClear}>
    {props.children}
  </div>
);

export default ButtonClear;