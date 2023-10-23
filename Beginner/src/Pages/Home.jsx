import SliderMom from "../Components/SliderGeneral/SliderMom";
import HomeBG from "../Components/HomeBG";
import SliderData from "../Data/SlideData";
import CarouselHome from "../Components/CarouselHome";
import CarouselHomeData from "../Data/CarouselHomeData";
import Article from "../Components/Ariticle";
import styled from "styled-components";
import { css } from "styled-components";

export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 993px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
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
const Home = () => {
  return (
    <div style={{ backgroundColor: "#18150d" }}>
      <HomeBG />
      <Article />
      <a href='/student' style={{textDecoration:'none'}}>
        <SliderMom
          title="Student of Knowledge - Foundation"
          slidedata={SliderData}
        />
        <SliderMom title="Tazkiyah" slidedata={SliderData} />
        <SliderMom title="Aqeedah" slidedata={SliderData} />
        </a>
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
        <CarouselHome carouselImages={CarouselHomeData} />
        <CarouselHome carouselImages={CarouselHomeData} />
      </div>
    </div>
  );
};

export default Home;
