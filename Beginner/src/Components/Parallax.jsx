import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styled from "styled-components";
const Parallax = () => {
  const ParallaxContainer = styled.div`
    width: 100wh;
    height: 100vh;
    margin-bottom: 60px;
    margin-top: 30px;
    overflow: hidden;
    position: relative;
  `;
  const Title = styled(motion.h1)`
    font-weight: bold;
    color: white;
    z-index: 10;
    position: absolute;
    top: 5%;
    right: 40%;
    font-size: 60px;
  `;
  const BackgroundBehind = styled(motion.div)`
    position: absolute;
    z-index: 0;
    background-image: url(/Images/desertMountain.png);
    background-position: bottom;
    background-size: cover;
    inset: 0;
  `;
  const BackgroundFront = styled.div`
    position: absolute;
    z-index: 20;
    background-image: url(/Images/SubtractMountain.png);
    background-position: bottom;
    background-size: cover;
    inset: 0;
  `;
    const ref = React.useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","end end"]
    });
    const backgroundY = useTransform(scrollYProgress, [0,1],["0%","100%"]);
    const textY = useTransform(scrollYProgress, [0,1],["0%","300%"]);

  return (
    <ParallaxContainer ref={ref}>
      <Title animate={{opacity:1,y:textY}} initial={{opacity:0}} transition={{ duration: 1, delay: 0.5 }}>Parallax</Title>
      <BackgroundBehind animate={{opacity:1,y:backgroundY}} initial={{opacity:0}} transition={{ duration: 1, delay: 0.2 }}/>
      <BackgroundFront />
    </ParallaxContainer>
  );
};

export default Parallax;
