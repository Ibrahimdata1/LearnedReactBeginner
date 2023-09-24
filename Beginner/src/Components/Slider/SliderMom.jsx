
import { SliderMomContainer,SliderMomContent,Title,WrapMomSlide } from '../../Styles/Slider.style'
import SliderSon from './SliderSon'

const Slider = ({title}) => {
  return (
    <SliderMomContainer>
      <SliderMomContent>
        <Title>{title}</Title>
        <WrapMomSlide>
            <SliderSon/>
        </WrapMomSlide>
      </SliderMomContent>
    </SliderMomContainer>
  )
}

export default Slider
