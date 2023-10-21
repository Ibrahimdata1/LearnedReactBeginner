import React from "react";
import styled from "styled-components";
import ProductBook from "../Components/Productcomponents/ProductBook";
import SearchBar from "../Components/ProductComponents/SearchBar";
import SideBar from '../Components/Product_Sidebar/SideBar'
import { CartContext } from "../Components/Context";
import {FilterContext} from "../Components/Context";


const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;
const Products = () => {
  
  //-------Search Filter---------//
  const [searchProduct, setSearchProduct] = React.useState("");
  const {displayProducts,setDisplayProducts} = React.useContext(CartContext)
const searchHandler = (event)=>{
    setSearchProduct(event.target.value)
}
const radioHandler = (title) =>{
    if(title === 'All'){
      setSearchProduct('')
    }else if(title === "$0-$50"){
      setSearchProduct('Small')
    }else if(title === "$50-$100"){
      setSearchProduct('Medium')
    }
    else {
      setSearchProduct(title)
    }
};
React.useEffect(()=>{
  setSearchProduct('')
},[])
const onRemoveProduct = (item)=>{
    const newProducts = displayProducts.filter((products)=>item.id !== products.id)
    setDisplayProducts(newProducts)
};
const filterSearch = displayProducts.filter((item)=>{
   return (item.title.toLowerCase().includes(searchProduct.toLowerCase()) || item.priceAmount.toLowerCase().includes(searchProduct.toLowerCase()))
});


  return (
    <FilterContext.Provider value={{radioHandler,onRemoveProduct,displayProducts}}>
      <div style={{backgroundColor:'#18150d'}}>
          <SearchBar searchHandler={searchHandler} />
          <ProductsContainer>
            <SideBar />
            <ProductBook filterSearch={filterSearch}/>
          </ProductsContainer>
      </div>
    </FilterContext.Provider>
  );
};

export default Products;
