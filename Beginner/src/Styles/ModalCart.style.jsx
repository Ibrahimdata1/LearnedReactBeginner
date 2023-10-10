import styled from "styled-components";

export const ModalContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  justify-content: flex-start;
  color: #18150d;
`;
export const ModalTitle = styled.h2`
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
`;
export const ModalContent = styled.div`
overflow-y: scroll;
  &::-webkit-scrollbar {
  display: none;
}   
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  margin-bottom: 10px;
`;
export const CardName = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
export const CardImgDiv = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
`;
export const CardImg = styled.img`
  display: flex;
  justify-content: center;
  max-height: 90px;
  max-width: 80px;
`;
export const CardButtonContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;
export const CardCal = styled.div`
  display: flex;
  justify-content: center;
  flex: 2
`;
export const CardDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1
`;
export const SecondModalContainer = styled.div`
  line-height: 10px;
  display: flex;
  flex-direction: column;
`;
export const Line = styled.hr`
    background-color: gray;
    width: 100%;
    margin-top: 20px;
`;
export const ItemPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ItemPriceTitle = styled.h3`
  flex: 1;
`;
export const ItemPriceResult = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const ShoppingPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ShoppingPriceTitle = styled.h3`
  flex: 1;
`;
export const ShoppingPriceResult = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const TotalPriceTitle = styled.h1`
  flex: 1;
  font-weight: bold;
  color: gold;
`;
export const TotalPriceResult = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  color: gold;
`;
export const ButtonCheckout = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`