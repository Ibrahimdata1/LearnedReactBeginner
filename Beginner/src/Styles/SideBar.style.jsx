import styled from "styled-components";

export const SideBarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #100C08;
  color: white;
  flex: 1;
  padding-bottom: 1.5rem;
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
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const SubSideBarTitle = styled.h6`
  text-align: center;
  font-weight: normal;
  font-size: 22px;
  margin: 0 0 10px 0;
  padding-bottom: 5px;
  border-bottom: 2px solid gray;
  width: 80%;
`;
export const SubSideBarLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
`
export const SubSideBarInput = styled.input`
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~span{
        background-color: #2196f3;
    }
    &:checked ~span::after{
        display: block;
    }
    &:hover{
        background-color: #ccc;
    }
`
export const SubSideBarSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 50%;
    &:hover{
        background-color: #ccc;
    }
    &::after{
        top: 6.4px;
        left: 6.4px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: white;
        display: none;
        position: absolute;
        content: '';
    }
`
export const SubSideBarLabelContainer = styled.div`
  margin-top: 15px;
`;
