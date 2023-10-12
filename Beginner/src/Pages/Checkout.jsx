import ReactImageMagnify from 'react-image-magnify';
import styled from "styled-components";
import {css} from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { CartContext } from '../Components/Context';
import React from "react";

const mobile =(props)=>{
  return css`
      @media only screen and (max-width:992px){
          ${props}
      }
  `;
}
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding:'40px 10px 10px 10px'})}
`;
const Title = styled.h1`
  text-align: center;
  margin-left: 35px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: ${(props) => props.typeof === "filled" && "none"};
  background-color: ${(props) =>
    props.typeof === "filled" ? "black" : "transparent"};
  color: ${(props) => props.typeof === "filled" && "white"};
`;

const TopTexts = styled.span`
  display: flex;
  justify-content: center;
  ${mobile({display:'none'})}
`;

const Toptext = styled.div`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  ${mobile({flexDirection:'column'})}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  ${mobile({flexDirection:'column'})}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const ProductCopy = styled.span``;
const Image = styled.img`
  width: 200px;
  ${mobile({marginBottom:'20px'})}
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductHarakat = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
  ${mobile({margin:'5px 15px'})}
`;
const ProductPrice = styled.span`
  font-size: 30px;
  color: goldenrod;
  ${mobile({marginBottom:'20px', marginLeft:'0'})}
`;
const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 55vh;
  margin-top: 40px;
`;
const SummaryTitle = styled.h3`
  text-align: center;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.typeof === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  margin-top: 20px;
  ${mobile({marginTop:'0'})}
`;

const ModalProduct = () => {
  const {zoomBook} = React.useContext(CartContext)
  return (
    <Container>
      <Wrapper>
        <Title>YOUR KITAB</Title>
        <Top>
          <TopButton style={{ color: "black" }}>Continue Shopping</TopButton>
          <TopTexts>
            <Toptext>Shooping Bag (2)</Toptext>
            <Toptext>Your wishlist (0)</Toptext>
          </TopTexts>
          <TopButton typeof="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <div style={{width:'200px'}}>
                  <ReactImageMagnify {...{
                    smallImage:{
                      isFluidWidth:true,
                      src:`${zoomBook.url}`
                    },
                    largeImage:{
                      src:`${zoomBook.url}`,
                      width: 600,
                      height: 800
                    }
                  }}/>
                </div>
                <Details>
                  <ProductName>
                    <b>Product: </b>{zoomBook.title}
                  </ProductName>
                  <ProductID>
                    <b>ID: </b>8943223994
                  </ProductID>
                  <ProductHarakat>
                    <b>Harakat: </b>100%
                  </ProductHarakat>
                  <ProductCopy>
                    <b>Copy: </b>Saudi{" "}
                  </ProductCopy>
                </Details>
                
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ {zoomBook.price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>
          
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem typeof="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 90</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
          
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default ModalProduct
