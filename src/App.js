import './App.css';
import BannerLogo from './img/banner-custom.png';


function App() {
  return (
    <div className="App">
      <div className="banner-logo-container">
        <img 
          src={BannerLogo}
          className='banner-logo'
          alt='Banner del Princio de la Aplicación' />
      </div>
    </div>
  );
}

export default App;
