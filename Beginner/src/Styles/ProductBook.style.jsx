import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 0 0;
  z-index: -2;
  justify-content: center;
  flex: 4;
`;
export const CardContent = styled.div`
  margin: 15px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardIMG = styled.img`
  width: 9rem;
  margin-bottom: 0.3rem;
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
`;
export const CardPrice = styled.div``;
export const CardComment = styled.div`
  max-width: 12rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;
