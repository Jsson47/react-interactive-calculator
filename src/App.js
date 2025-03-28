import './App.css';
import BannerLogo from './img/banner-custom.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  // useState es un Hook que nos permite añadir el estado de la aplicación


  const [input, setInput] = useState("");
  
  const addToInput = val => {
    setInput(input + val);
  }

  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter an operation");
    };
    
  };
  // evaluate es una función que evalua una expresión
    // evaluate("2+2") => 4
    // evaluate("2*2") => 4
    // evaluate("2/2") => 1
    // evaluate("2-2") => 0
    // evaluate("2+2*2") => 6
    // evaluate("2+2/2") => 3

  return (
    <div className="App">
      <div className="banner-logo-container">
        <img 
          src={BannerLogo}
          className='banner-logo'
          alt='Banner del Princio de la Aplicación' />
      </div>
      <div className='calculator-container'> 
        <Screen input={input}/>
        <div className='fila'>
          <Button clickOperator={addToInput}>1</Button>
          <Button clickOperator={addToInput}>2</Button>
          <Button clickOperator={addToInput}>3</Button>
          <Button clickOperator={addToInput}>+</Button>  
        </div>
        <div className='fila'>
          <Button clickOperator={addToInput}>4</Button>
          <Button clickOperator={addToInput}>5</Button>
          <Button clickOperator={addToInput}>6</Button>
          <Button clickOperator={addToInput}>-</Button>
        </div>
        <div className='fila'>
          <Button clickOperator={addToInput}>7</Button>
          <Button clickOperator={addToInput}>8</Button>
          <Button clickOperator={addToInput}>9</Button>
          <Button clickOperator={addToInput}>*</Button>
        </div>
        <div className='fila'>
          <Button clickOperator={calculate}>=</Button>
          <Button clickOperator={addToInput}>0</Button>
          <Button clickOperator={addToInput}>.</Button>
          <Button clickOperator={addToInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear
            operatorClear={() => setInput("")}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

/* para nuestro Button tenemos dos clases, Button-container y operator para aquellos que representen un operador*/
