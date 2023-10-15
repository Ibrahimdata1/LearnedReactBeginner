import styled from "styled-components";
import { css } from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "40px 10px 10px 10px" })}
`;
export const Title = styled.h1`
  text-align: center;
  margin-left: 35px;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const TopButton = styled(Button)`
  padding: 10px;
  cursor: pointer;
`;

export const TopTexts = styled.span`
  display: flex;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

export const Toptext = styled.div`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
`;
export const DetailsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  ${mobile({ flexDirection: "column" })}
`;
export const Info = styled.div`
  flex: 3;
  display: flex;
`;
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  ${mobile({ flexDirection: "column" })}
`;
export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
`;
export const ProductCopy = styled.div``;
export const Image = styled.img`
  width: 200px;
  ${mobile({ marginBottom: "20px" })}
`;
export const ProductName = styled.h1`
  display: flex;
  justify-content: flex-start;
  margin: 0 0 20px 0;
`;
export const ProductComment = styled.p`
  display: flex;
  justify-content: center;
  margin: 0px;
`;
export const ProductHarakat = styled.div``;
export const PriceDetail = styled.div`
  flex: 1;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;
export const Details = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
`;
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid white;
`;
export const ProductAmount = styled.div`
  font-size: 20px;
  margin: 0 20px;
  ${mobile({ margin: "5px 15px" })}
`;
export const ProductPrice = styled.span`
  font-size: 30px;
  color: goldenrod;
  ${mobile({ marginBottom: "20px", marginLeft: "0" })}
`;
export const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;
export const Related = styled.div`
  height: 80vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: #fff;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }
`;
export const RelatedTitle = styled.h3`
  text-align: left;
  display: flex;
  align-items: center;
`;
export const RelatedItemTitle = styled.h3`
color: white;
margin: 0 0 10px 0;
&:hover{
  color: #ff5900;
}
`;
export const RelatedItemPrice = styled.p`
margin: 0 0 10px 0;
color: #ff0000e0;
`;
export const RelatedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RelatedItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;
export const RelatedItemImg = styled.img`
  width: 50px;
  height: 80px;
`;
export const ButtonCart = styled(Button)`
  width: 100%;
  ${mobile({ marginTop: "0" })}
`;
export const ProductAddCart = styled.div`
  margin-left: 30px;
`;
export const RelatedItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const WrapProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 0;
`;
export const AddButton = styled(Add)`
  border: 1px solid white;
  padding: 10px 0;
  cursor: pointer;
`;
export const DelButton = styled(Remove)`
  border: 1px solid white;
  padding: 10px 0;
  cursor: pointer;
`;
export const Side = styled.div`
  flex: 1;
`;
