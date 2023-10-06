import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { CartContext } from "./Components/Context";
import React, { useEffect } from "react";
import Student from "./Pages/Student";
import VidPlayerData from "./Data/VidPlayerData";


const App = () => {
//-------------CartFunction------------//
const [cart,setCart] = React.useState([]);
const onAdd = (item) =>{
    const exist = cart.find((cart)=>cart.id === item.id);
    if (exist){
        const newCart = cart.map((cart)=>cart.id === item.id ? {...exist, qty:exist.qty+1}:cart)
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
    }else{
        const newCart = [...cart,{...item,qty:1}];
        setCart(newCart);
        localStorage.setItem('cart',JSON.stringify(newCart));
    }
};
const onRemove = (item) =>{
  const exist = cart.find((cart)=>cart.id === item.id);
  if (exist.qty === 1){
      const newCart = cart.filter((cart)=>cart.id !== item.id);
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
  }else{
      const newCart = cart.map((cart)=>cart.id === item.id ? {...exist,qty:exist.qty-1}:cart);
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
  }
};
const onClear = (item) => {
  const newCart = cart.filter((cart) => cart.id !== item.id)
  setCart(newCart);
  localStorage.setItem('cart',JSON.stringify(newCart));
};
useEffect(()=>{
  setCart(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[]
  );  
},[]);
const cartLength = cart.length;
//---------showCartModal-----------//
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [urlVid, setUrlVid] = React.useState(VidPlayerData);
  const changeVidUrl = (item) => {
    const newUrl = urlVid.map((urlVid)=>( {...urlVid, url: item.vidUrl}) );
   setUrlVid(newUrl);
  };
  return (
    <BrowserRouter>
      <CartContext.Provider value={{onAdd,onRemove,cartLength,cart,setCart,onClear,open,setOpen,handleClose,handleOpen,changeVidUrl,urlVid}}>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/student" element={<Student/>}/>
        <Route path="/about" />
      </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
