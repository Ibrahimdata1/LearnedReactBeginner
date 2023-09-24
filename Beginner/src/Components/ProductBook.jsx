import { CardContainer} from "../Styles/ProductBook.style"
import ProductBookItem from "./ProductBookItem"
import BookData from '../Data/BookData'

const ProductBook = () => {
  return (
    <CardContainer>
        {BookData.map((item)=>(
            <ProductBookItem key={item.id} {...item}/>
        ))}
    </CardContainer>
  )
}

export default ProductBook
