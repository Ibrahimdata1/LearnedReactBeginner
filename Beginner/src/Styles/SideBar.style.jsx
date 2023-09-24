import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  color: white;
  flex: 1;
`;
export const LogoContainer = styled.div`
  margin-bottom: 4rem;
  margin-top: 1.3rem;

  @media (max-width: 1600px) {
    margin-bottom: 2rem;
  }
`;
export const SubSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;
export const SubSideBarTitle = styled.h6`
  text-align: center;
  font-weight: normal;
  font-size: 22px;
  margin: 0 0 10px 0;
  padding-bottom: 5px;
  border-bottom: 2px solid gray;
  width: 80%;

  @media (max-width: 1600px) {
    font-size: 20px;
  }
`;
export const SubSideBarLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SubSideBarLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;
