import styled from "styled-components";
import ProductBook from "../Components/ProductBook";
import SearchBar from "../Components/SearchBar";
import SideBar from "../Components/SideBar/SideBar";

const Products = () => {
  const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;
  return (
    <>
      <SearchBar />
      <ProductsContainer>
        <SideBar />
        <ProductBook />
      </ProductsContainer>
    </>
  );
};

export default Products;
