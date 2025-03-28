import './App.css';
import BannerLogo from './img/banner-custom.png';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="banner-logo-container">
        <img 
          src={BannerLogo}
          className='banner-logo'
          alt='Banner del Princio de la Aplicación' />
      </div>
      <div className='calculator-container'> 
        <div className='fila'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>  
        </div>
        <div className='fila'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='fila'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='fila'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;

/* para nuestro Button tenemos dos clases, Button-container y operator para aquellos que representen un operador*/
