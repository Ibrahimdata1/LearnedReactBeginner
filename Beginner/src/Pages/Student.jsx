import SliderMom from "../Components/SliderGeneral/SliderMom";
import SliderData from "../Data/SlideData";
import BookData from "../Data/BookData";
import VideoPlayer from "../Components/VideoComponents/VideoPlayer";
import React from "react";
import { BackgroundContainer } from "../Styles/SDprogram.style";

const Student = () => {
    const [showSlider,setShowSlider] = React.useState(false)
    setTimeout(()=>{
      setShowSlider(true);
    },3000);
  return (
    <div style={{backgroundColor:'#18150d'}}>
      <BackgroundContainer/>
      <VideoPlayer/>
      {showSlider && (
      <div>
          <SliderMom title="Recommened" slidedata={SliderData}/>
          <SliderMom title="Tazkiyah" slidedata={BookData} />
          <SliderMom title="Aqeedah" slidedata={BookData} />
          <SliderMom title="Fiqh" slidedata={SliderData} />
      </div>
      )}
    </div>
  );
};

export default Student;
