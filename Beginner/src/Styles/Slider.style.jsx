import styled from "styled-components";
import {motion} from 'framer-motion'

export const SliderMomContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0.8rem 0;
  text-align: left;
`;
export const SliderMomContainer = styled(motion.div)``;
export const Title = styled.h1`
  font-weight: 400;
  border-bottom: 2px solid #f4f5f6;
  color: #ff6b00ff;
  margin-bottom: 15px;
  padding-left: 4rem;
`;

export const WrapMomSlide = styled.div``;
export const SliderSonContainer = styled.div`
  position: relative;
`;
export const ButtonSliderContainer = styled(motion.div)`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: whitesmoke;
    border: none;
    position: absolute;
    top: 45%;
    right: 1rem;
  }
  .back {
    left: 1rem;
  }
`;
