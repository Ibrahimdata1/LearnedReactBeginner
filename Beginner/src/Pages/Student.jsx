import SliderMom from "../Components/Slider/SliderMom";
import SDprogramMom from "../Components/SDprogramMom";
import SliderData from "../Data/SlideData";
import BookData from "../Data/BookData";

const Student = () => {
  return (
    <>
      <SDprogramMom/>
      <SliderMom title="Recommened" slidedata={SliderData}/>
      <SliderMom title="Tazkiyah" slidedata={BookData} />
      <SliderMom title="Aqeedah" slidedata={BookData} />
      <SliderMom title="Fiqh" slidedata={SliderData} />
    </>
  );
};

export default Student;
