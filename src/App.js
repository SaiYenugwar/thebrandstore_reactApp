import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Dashboard from './components/Dashboard';
import Mens from './components/Category/Mens';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import CartProvider from './Context/CartContext';
import Footer from './components/footer';
import Cart from './components/Cart';
import Women from './components/Category/Women';
import Mobile from './components/Category/Mobile';
import Watch from './components/Category/Watch';
import Laptop from './components/Category/Laptop';
import TV from './components/Category/TV';
import Monitor from './components/Category/Monitor';
import AC from './components/Category/AC';
import Headphone from './components/Category/Headphone';
import Tab from './components/Category/Tab';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>

    <Home/>
    <div className="mar"> </div>

    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/Mens" element={<Mens />} />
    <Route path="/Women" element={<Women />} />
    <Route path="/Mobiles" element={<Mobile />} />
    <Route path="/Watch" element={<Watch />} />
    <Route path="/Laptop" element={<Laptop />} />
    <Route path="/TV" element={<TV />} />
    <Route path="/Monitor" element={<Monitor />} />
    <Route path="/AC" element={<AC />} />
    <Route path="/Headphone" element={<Headphone />} />
    <Route path="/Tab" element={<Tab />} />
    <Route path="/Cart" element={<Cart />} />
    </Routes>
    
    <div className='mt-5'></div>
    <Footer/>
    
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
