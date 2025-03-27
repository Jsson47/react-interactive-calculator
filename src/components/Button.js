import React from "react";
import "../CSS/Button.css";

function Button(props) { /* esOperator retorna true o false */

  const isOperator = val => { /* 3 criterios especificos */

    return isNaN(val) && (val != ".") && (val != "=")  /* si no es un numero y no es un punto */
    
  };

  return (
    <div
      className={`button-container ${isOperator(props.children) ? "operator" : null }`}> 
      {props.children}
    </div>
  );
}

export default Button;

/**/ /*.trimEnd() es un metodo de los strings que quita los espacios al final de la cadena de texto*/
/*  */ /*.trimStart() es un metodo de los strings que quita los espacios al inicio de la cadena de texto*/
/*  */ /*.trim() es un metodo de los strings que quita los espacios al inicio y al final de la cadena de texto*/
/*  {``}  */ /* es un template string */