import {
  SliderMomContainer,
  SliderMomContent,
  Title,
} from "../../Styles/Slider.style";
import SliderSon from "./SliderSon";


const SliderMom = ({ title, slidedata}) => {
  return (
    <SliderMomContainer initial={{x:'100vw'}}
    animate={{x:0}}
    transition={{type:'spring',duration:3,delay:0.5}}>
      <SliderMomContent>
        <Title>{title}</Title>
        <SliderSon slidedata={slidedata}/>
      </SliderMomContent>
    </SliderMomContainer>
  );
};

export default SliderMom;
