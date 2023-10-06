import styled from "styled-components";
import { motion } from "framer-motion";

export const CarouselContainer = styled.div``;

export const CarouselImgContent = styled.div`
  position: relative;
  border-radius: 10px;
  height: 400px;
  max-width: 650px;
  margin: auto;
  overflow: hidden;
`;
export const CarouselHomeImg = styled(motion.img)`
  width: 99%;
  height: 99%;
  border-radius: 8px;
  border: 1px solid #010b13;
  object-fit: cover;
`;
export const SlideDirection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Left = styled(motion.div)`
  background-color: #fb666675;
  color: #fff;
  padding: 10px 8px 8px 13px;
  margin: 0 20px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 10px;
  height: 25px;
  width: 25px;
  left: 0;
`;
export const Right = styled(motion.div)`
  background-color: #fb666675;
  color: #fff;
  padding: 10px 8px 8px 13px;
  margin: 0 20px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 10px;
  height: 25px;
  width: 25px;
  right: 0;
`;
export const Indicator = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
