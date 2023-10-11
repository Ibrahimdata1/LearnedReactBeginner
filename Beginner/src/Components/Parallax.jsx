import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";
const Parallax = () => {
  const ParallaxContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin-bottom: 60px;
    margin-top: 30px;
    overflow: hidden;
    position: relative;
  `;
  const Title = styled(motion.h1)`
    font-weight: bold;
    color: white;
    z-index: 20;
    position: absolute;
    top: 5%;
    right: 40%;
    font-size: 60px;
  `;
  const BackgroundBehind = styled(motion.div)`
    position: absolute;
    z-index: 0;
    background-image: url(/Images/Night.jpg);
    background-position: bottom;
    background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `;
  const BackgroundFront = styled(motion.div)`
    position: absolute;
    z-index: 20;
    background-image: url(/Images/SubtractMountain.png);
    background-position: bottom;
    background-size: cover;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `;
  const ref = React.useRef(null);
    const {scrollYProgress} = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0,1],["0%","100%"]);
    const textY = useTransform(scrollYProgress, [0,1],["0%","700%"]);

  return (
    <ParallaxContainer>
      <Title style={{y:textY}}>Parallax</Title>
      <BackgroundBehind/>
      <BackgroundFront style={{y:backgroundY}}/>
    </ParallaxContainer>
  );
};

export default Parallax;
