import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { CartContext } from "./Components/Context";
import React from "react";

const App = () => {
//-------------CartFunction------------//
const [cart,setCart] = React.useState([]);
const onAdd = (item) =>{
    const exist = cart.find((cart)=>cart.id === item.id);
    if (exist){
        const newCart = cart.map((cart)=>cart.id === item.id ? {...exist, qty:exist.qty+1}:cart)
        setCart(newCart);
    }else{
        const newCart = [...cart,{...item,qty:1}];
        setCart(newCart);
    }
};
const onRemove = (item) =>{
  const exist = cart.find((cart)=>cart.id === item.id);
  if (exist.qty === 1){
      const newCart = cart.filter((cart)=>cart.id !== item.id);
      setCart(newCart);
  }else{
      const newCart = cart.map((cart)=>cart.id === item.id ? {...exist,qty:exist.qty-1}:cart);
      setCart(newCart);
  }
};
const onClear = (item) => {
  const newcart = cart.filter((cart) => cart.id !== item.id)
  setCart(newcart);
  localStorage.setItem('cartItem',JSON.stringify(newcart));
};
const cartLength = cart.length;
//---------showCartModal-----------//
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{onAdd,onRemove,cartLength,cart,setCart,onClear,open,setOpen,handleClose,handleOpen}}>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
