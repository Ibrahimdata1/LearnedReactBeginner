import React from "react";
import Slider from "react-slick";
import SliderSonItem from "./SliderSonItem";
import SlideData from '../Data/SlideData'
import { ButtonSliderContainer,SliderSonContainer } from "../Styles/Slider.style";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SliderSon = () => {
    var settings = {
      className: "center",
      centerMode: true,
      arrows:false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              centerMode: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }
        ]
      };
  const arrowRef = React.useRef(null);
  return (
    <SliderSonContainer>
      <Slider ref={arrowRef} {...settings}>
        {SlideData.map((item)=>(
        <SliderSonItem key={item.id} {...item}/>
        ))}
      </Slider>
      <ButtonSliderContainer>
        <button className="back" onClick={()=>arrowRef.current.slickPrev()}><ArrowBackIosNewIcon/></button>
        <button className="next" onClick={()=>arrowRef.current.slickNext()}><ArrowForwardIosIcon/></button>
      </ButtonSliderContainer>
    </SliderSonContainer>
  )
}

export default SliderSon
