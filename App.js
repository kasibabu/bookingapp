import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'
// import FetchingProd from './components/Products/FetchProd';
import { CartProvider } from './components/cart/CartContext';
import Carousel from './components/Carousel/Carosel';
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <div className='corousel'>
          <Carousel />
        </div>
        <div className='main'>
          <Main />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
