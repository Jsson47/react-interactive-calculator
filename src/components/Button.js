import React from "react";

function Button(props) {
  return (
    <div
      className={`button-container ${isOperator(props.children) ? "operator" : null }`}>
      {props.children}
    </div>
  );
}

export default Button;