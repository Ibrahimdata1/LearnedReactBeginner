import SliderMom from '../Components/Slider/SliderMom'
import HomeBG from '../Components/HomeBG'
import SliderData from '../Data/SlideData'
const Home = () => {
  return (
    <>
      <HomeBG/>
      <SliderMom title='Student of Knowledge - Foundation' slidedata={SliderData}/>
      <SliderMom title='Tazkiyah' slidedata={SliderData}/>
      <SliderMom title='Aqeedah' slidedata={SliderData}/>
    </>
  )
}

export default Home
