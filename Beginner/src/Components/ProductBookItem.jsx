import {
  CardComment,
  CardIMG,
  CardDetails,
  CardPrice,
  CardTitle,
  CardContent,
} from "../Styles/ProductBook.style";

const ProductBookItem = ({ url, title, price, comment }) => {
  return (
    <CardContent>
      <CardIMG src={url} />
      <CardDetails>
        <CardTitle>{title}</CardTitle>
        <CardComment>{comment}</CardComment>
        <CardPrice>{price}</CardPrice>
      </CardDetails>
    </CardContent>
  );
};

export default ProductBookItem;
