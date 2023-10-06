import {
  CardComment,
  CardIMG,
  CardDetails,
  CardPrice,
  CardTitle,
  CardContent,
} from "../../Styles/ProductBook.style";
import { ButtonItem } from "../../Styles/ProductBook.style";
import {CartContext} from "../Context";
import React from "react";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

const ProductBookItem = ({item}) => {
    const {onAdd} = React.useContext(CartContext)
    const [isHover,setIsHover] = React.useState(false)
  return (
    <CardContent onMouseOver={()=>setIsHover(true)} onMouseOut={()=>setIsHover(false)}>
      <CardIMG src={item.url} />
      <CardDetails className={`${
          isHover ? "bgColor" : ""
        }`}>
        <CardTitle>{item.title}</CardTitle>
        <CardComment>{item.comment}</CardComment>
        <CardPrice>${item.price}</CardPrice>
        <ButtonItem variant="contained" color="error" onClick={()=>onAdd(item)}><ShoppingCartCheckoutOutlinedIcon style={{marginRight:'10px'}}/>ADD TO CART</ButtonItem>
      </CardDetails> 
    </CardContent>
  );
};

export default ProductBookItem;
