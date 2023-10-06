import {
  SliderMomContainer,
  SliderMomContent,
  Title,
} from "../../Styles/Slider.style";
import SliderSon from "./SliderSon";

const SliderMom = ({ title, slidedata}) => {
  return (
    <SliderMomContainer>
      <SliderMomContent>
        <Title>{title}</Title>
        <SliderSon slidedata={slidedata}/>
      </SliderMomContent>
    </SliderMomContainer>
  );
};

export default SliderMom;
