import { SliderSonItemContainer } from "../../Styles/Slider.style"

const SliderSonItem = ({url,title}) => {
  return (
    <SliderSonItemContainer>
      <img src={url} alt={title}/>
    </SliderSonItemContainer>
  )
}

export default SliderSonItem
