import styled from "styled-components";
import { Button } from '@mui/material';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 0 0;
  justify-content: center;
  flex: 4;
`;
export const CardContent = styled.div`
  margin: 15px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;
export const CardIMG = styled.img`
  max-width: 350px;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 0.3rem;
  border-radius: 5px;
`;
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`;
export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  margin-top: 0;
`;
export const CardPrice = styled.div`
    padding-bottom: 15px;
`;
export const CardComment = styled.div`
  max-width: 12rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;
export const ButtonItem = styled(Button)`
    width: 100%;
    cursor: pointer;
`

