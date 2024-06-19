import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Dashboard from './components/Dashboard';
import Mens from './components/Category/Mens';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import CartProvider from './Context/CartContext';
import Footer from './components/footer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>

    <Home/>
    <div className="mar"> </div>

    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/Mens" element={<Mens />} />
    <Route path="/Cart" element={<Cart />} />
    </Routes>
    
    <div className='mt-5'></div>
    <Footer/>
    
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
