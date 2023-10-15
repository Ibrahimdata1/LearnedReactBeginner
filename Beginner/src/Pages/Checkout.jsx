import ReactImageMagnify from "react-image-magnify";
import styled from "styled-components";
import { css } from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { CartContext } from "../Components/Context";
import React from "react";
import { Button } from "@mui/material";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "40px 10px 10px 10px" })}
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
const TopButton = styled(Button)`
  padding: 10px;
  cursor: pointer;
`;

const TopTexts = styled.span`
  display: flex;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const Toptext = styled.div`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;
const DetailsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
  display: flex;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 1;
  display: flex;
`;
const ProductCopy = styled.div``;
const Image = styled.img`
  width: 200px;
  ${mobile({ marginBottom: "20px" })}
`;
const ProductName = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 20px 0;
`;
const ProductComment = styled.p`
  display: flex;
  justify-content: center;
  margin: 0px;
`;
const ProductHarakat = styled.div``;
const PriceDetail = styled.div`
  flex: 1;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;
const Details = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;

`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
`;
const ProductAmount = styled.div`
  font-size: 20px;
  margin: 0 20px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.span`
  font-size: 30px;
  color: goldenrod;
  ${mobile({ marginBottom: "20px", marginLeft: "0" })}
`;
const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;
const Related = styled.div`
  flex: 1;
  border-radius: 10px;
  height: 80vh;
  overflow-y: scroll;
`;
const RelatedTitle = styled.h3`
  text-align: left;
`;
const RelatedItemTitle = styled.h3``;
const RelatedItemPrice = styled.p``;
const RelatedContainer = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;
const RelatedItemText = styled.div`
  display: flex;
  flex-direction: column;
`;
const RelatedItemImg = styled.img`
  width: 50px;
  height: 80px;
`;
const ButtonCart = styled(Button)`
  width: 120%;
  ${mobile({ marginTop: "0" })}
`;
const ProductAddCart = styled.div`
  margin-left: 30px;
`;
const RelatedItem = styled.div`
  display: flex;
`;
const WrapProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;
`;
const AddButton = styled(Add)`
  border: 1px solid white;
  padding: 10px 0;
  cursor: pointer;
`;
const DelButton = styled(Remove)`
  border: 1px solid white;
  padding: 10px 0;
  cursor: pointer;
`;
const Checkout = () => {
  const { zoomBook, onAdd } = React.useContext(CartContext);
  const [cartNum, setCartNum] = React.useState(1);
  const addCartNum = () => {
    if (cartNum > 0) {
      setCartNum((setCartNum) => setCartNum + 1);
    } else {
      setCartNum(1);
    }
  };
  const delCartNum = () => {
    if (cartNum > 1) {
      setCartNum((setCartNum) => setCartNum - 1);
    } else {
      setCartNum(1);
    }
  };
  const updateZoombook = () => {
    const newZoomBook = { ...zoomBook, qty: cartNum };
    onAdd(newZoomBook);
  };
  const { displayProducts } = React.useContext(CartContext);
  return (
    <Container style={{ backgroundColor: "#18150d" }}>
      <Wrapper>
        <Title>YOUR KITAB</Title>
        <Top>
          <TopButton variant="contained" color="primary">
            Continue Shopping
          </TopButton>
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
                <div style={{ width: "200px" }}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        isFluidWidth: true,
                        src: `${zoomBook.url}`,
                      },
                      largeImage: {
                        src: `${zoomBook.url}`,
                        width: 600,
                        height: 800,
                      },
                    }}
                  />
                </div>
              </ProductDetails>
              <Details>
                <DetailsContent>
                  <ProductName>{zoomBook.title}</ProductName>
                  <ProductComment>{zoomBook.comment}</ProductComment>
                  <Hr />
                  <PriceDetail>
                    <ProductPrice>$ {zoomBook.price}</ProductPrice>
                    <WrapProductAmount>
                      <ProductAmountContainer>
                        <AddButton onClick={addCartNum} />
                        <ProductAmount>{cartNum}</ProductAmount>
                        <DelButton onClick={delCartNum} />
                      </ProductAmountContainer>
                      <ProductAddCart>
                        <ButtonCart
                          onClick={updateZoombook}
                          variant="contained"
                          color="error"
                        >
                          Add Cart
                        </ButtonCart>
                  
                      </ProductAddCart>
                  
                    </WrapProductAmount>
                  
                  </PriceDetail>
                  <Hr />
                  <ProductHarakat>
                    <b>Harakat: </b>100%
                  </ProductHarakat>
                  <ProductCopy>
                    <b>Copy: </b>Saudi{" "}
                  </ProductCopy>
                </DetailsContent>
                
              </Details>
            </Product>
          </Info>

          <Related>
            <RelatedTitle>RELATED PRODUCTS</RelatedTitle>
            {displayProducts.map((item) => (
              <RelatedContainer>
                <RelatedItem>
                  <RelatedItemImg src={item.url} key={item.id} />
                  <RelatedItemText>
                    <RelatedItemTitle>{item.title}</RelatedItemTitle>
                    <RelatedItemPrice>{item.price}</RelatedItemPrice>
                  </RelatedItemText>
                </RelatedItem>
              </RelatedContainer>
            ))}
          </Related>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
