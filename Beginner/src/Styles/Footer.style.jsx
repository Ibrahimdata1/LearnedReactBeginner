import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  background-color: #191202;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
`;
export const Center = styled.div`
  flex: 1;
  padding: 20px 20px 20px 190px;
`;
export const Right = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px 20px 20px 100px;
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.a`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;
  &:hover{
    filter: brightness(80%);
  }
`;
export const Logo = styled.h1`
`;
export const Desc = styled.p`
  margin: 20px 0;
`;
export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }
`;
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const Payment = styled.img`
    width: 50%;
`;
