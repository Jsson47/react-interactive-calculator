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
          <Button>+</Button>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;

/* para nuestro Button tenemos dos clases, Button-container y operator para aquellos que representen un operador*/
