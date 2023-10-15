import ReactImageMagnify from "react-image-magnify";
import {Container,Wrapper,Title,Top,TopButton,TopTexts,Toptext,DetailsContent,Bottom,Side,Info,Product,ProductDetails,ProductCopy,Image,ProductName,ProductComment,ProductHarakat,PriceDetail,Details,ProductAmountContainer,ProductAmount,ProductPrice,RelatedTitle,Related,Hr,RelatedItemTitle,RelatedItemPrice,RelatedContainer,RelatedItemText,RelatedItemImg,ButtonCart,ProductAddCart,RelatedItem,WrapProductAmount,AddButton,DelButton} from '../Styles/Checkout.style'
import { CartContext } from "../Components/Context";
import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";


const Checkout = () => {
  const { zoomBook, onAdd ,changeBook} = React.useContext(CartContext);
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
  const [isHover,setIsHover] = React.useState(false)
  return (
    <Container style={{ backgroundColor: "#18150d" }}>
      <Wrapper>
        <Title>YOUR KITAB</Title>
        <Top>
          <Link to={'/products'}>
            <TopButton variant="contained" color="primary">
              Continue Shopping
            </TopButton>
          </Link>
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
                <div style={{ width: "250px",zIndex:'10'}}>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        isFluidWidth: true,
                        src: `${zoomBook.url}`,
                      },
                      largeImage: {
                        src: `${zoomBook.url}`,
                        width: 800,
                        height: 1000,
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
                          size="large"
                        >
                          <ShoppingCartCheckoutIcon style={{marginRight:'5px'}}/>
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

          <Side>
            <RelatedTitle><ChevronLeftIcon style={{marginRight:'10px'}}/>RELATED PRODUCTS</RelatedTitle>
            <Related>
                {displayProducts.map((item) => (
                  <RelatedContainer>
                    <RelatedItem  onClick={()=>changeBook(item)}  className={`${
                    isHover ? "bgColorCheckout_Side" : ""
                  }`}  onMouseOver={()=>setIsHover(true)} onMouseOut={()=>setIsHover(false)}>
                      <RelatedItemImg src={item.url} key={item.id} />
                      <RelatedItemText>
                        <RelatedItemTitle>{item.title}</RelatedItemTitle>
                        <RelatedItemPrice>${item.price}</RelatedItemPrice>
                      </RelatedItemText>
                    </RelatedItem>
                  </RelatedContainer>
                ))}
            </Related>
          </Side>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
