import SliderMom from '../Components/SliderGeneral/SliderMom'
import HomeBG from '../Components/HomeBG'
import SliderData from '../Data/SlideData'
import CarouselHome from '../Components/CarouselHome'
import CarouselHomeData from '../Data/CarouselHomeData'

const Home = () => {
  return (
    <>
      <HomeBG/>
      <SliderMom title='Student of Knowledge - Foundation' slidedata={SliderData}/>
      <SliderMom title='Tazkiyah' slidedata={SliderData}/>
      <SliderMom title='Aqeedah' slidedata={SliderData}/>
      <CarouselHome carouselImages={CarouselHomeData}/>
    </>
  )
}

export default Home
