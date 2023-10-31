import SliderMom from "../Components/SliderGeneral/SliderMom";
import HomeBG from "../Components/HomeBG";
import CarouselHome from "../Components/CarouselHome";
import CarouselHomeData from "../Data/CarouselHomeData";
import Article from "../Components/Ariticle";
import styled from "styled-components";
import { css } from "styled-components";
import Recommend from "../Data/Recommend";
import Aqeedah from "../Data/Aqeedah";
import Tazkiyah from "../Data/Tazkiyah";
import { Link } from "react-router-dom";
import PosterData2 from "../Data/PosterData2";
import PosterData3 from "../Data/PosterData3";

const ipad = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
const mobileBig = (props) => {
  return css`
    @media only screen and (max-width: 700px) {
      ${props}
    }
  `;
};
const Title = styled.h1`
  font-weight: 400;
  border-bottom: 2px solid #f4f5f6;
  color: #ffffff;
  margin-bottom: 15px;
  padding-left: 4rem;
  margin-top: 4rem;
  ${mobile({ display: "flex", justifyContent: "center", paddingLeft: "0" })}
`;
const Text = styled.p`
  padding: 10px 20px 0 20px;
`
const CarouselHomeIpad = styled.div`
  ${ipad({ display: "none"})}
`
const CarouselHomeMobile = styled.div`
  ${mobileBig({ display: "none"})}
`
const Home = () => {
  return (
    <div style={{ backgroundColor: "#18150d" }}>
      <HomeBG />
      <Article />
      <Link to='/student' style={{textDecoration:'none'}}>
        <SliderMom
          title="Student of Knowledge - Foundation"
          slidedata={Recommend}
        />
        <SliderMom title="Tazkiyah" slidedata={Tazkiyah} />
        <SliderMom title="Aqeedah" slidedata={Aqeedah} />
        </Link>
      <Title>New Events</Title>
      <Text> Due to the global transformation of technology in recent years, the
          challenges we deal with have changed drastically in comparison to a few
          decades ago. These challenges are constantly impacting education, the
          workplace and our home life. To cope with the increasing pace of
          modern-day life in the 21st century, you need to take a proactive
          approach in ensuring you are always developing yourself as a Muslim.
          Join our instructors on a wide-range of courses to become the best
          version of yourself, and in the process, get closer to the One who
          created you.</Text>
      <div style={{ display: "flex",justifyContent:'space-around',padding:'20px 0 50px 0'}}>
        <CarouselHome carouselImages={CarouselHomeData} />
        <CarouselHomeMobile>
          <CarouselHome carouselImages={PosterData2} />
        </CarouselHomeMobile>
        <CarouselHomeIpad>
          <CarouselHome carouselImages={PosterData3} />
        </CarouselHomeIpad>
      </div>
    </div>
  );
};

export default Home;
