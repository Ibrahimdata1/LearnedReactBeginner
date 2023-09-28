import {
  CardComment,
  CardIMG,
  CardDetails,
  CardPrice,
  CardTitle,
  CardContent,
} from "../Styles/ProductBook.style";
import { ButtonItem } from "../Styles/ProductBook.style";
import {CartContext} from "../Components/Context";
import React from "react";

const ProductBookItem = ({item}) => {
    const {onAdd} = React.useContext(CartContext)
  return (
    <CardContent>
      <CardIMG src={item.url} />
      <CardDetails>
        <CardTitle>{item.title}</CardTitle>
        <CardComment>{item.comment}</CardComment>
        <CardPrice>${item.price}</CardPrice>
      </CardDetails>
      <ButtonItem variant="contained" color="success" onClick={()=>onAdd(item)}>Buy</ButtonItem>
    </CardContent>
  );
};

export default ProductBookItem;
