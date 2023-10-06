import SliderMom from "../Components/SliderGeneral/SliderMom";
import SDprogramMom from "../Components/SDcomponents/SDprogramMom";
import SliderData from "../Data/SlideData";
import BookData from "../Data/BookData";
import VideoPlayer from "../Components/VideoComponents/VideoPlayer";
import React from "react";

const Student = () => {
  
  return (
    <>
      <SDprogramMom />
      <VideoPlayer/>
      <SliderMom title="Recommened" slidedata={SliderData}/>
      <SliderMom title="Tazkiyah" slidedata={BookData} />
      <SliderMom title="Aqeedah" slidedata={BookData} />
      <SliderMom title="Fiqh" slidedata={SliderData} />
    </>
  );
};

export default Student;
