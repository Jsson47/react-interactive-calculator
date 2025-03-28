import './App.css';
import BannerLogo from './img/banner-custom.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  
  const addToInput = val => {
    setInput(input + val);
  }

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
          <Button clickOperator={addToInput}>=</Button>
          <Button clickOperator={addToInput}>0</Button>
          <Button clickOperator={addToInput}>.</Button>
          <Button clickOperator={addToInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

/* para nuestro Button tenemos dos clases, Button-container y operator para aquellos que representen un operador*/
