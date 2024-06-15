import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Home></Home>
    <div className="mar"> </div>

    <Routes>
    <Route path="/" element={<Dashboard />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
