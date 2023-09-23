import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar'
import Home from "./Pages/Home";
import Products from "./Pages/Products";


const App = () => {
 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact"/>
        <Route path="/about"/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
