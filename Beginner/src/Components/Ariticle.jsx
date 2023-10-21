import styled from "styled-components";

const Artical = styled.div`
  display: flex;
  max-width: 100vw;
  max-height: 290px;
  padding-left: 20px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  background-color: #33333342;
  h1{
    font-weight: bold;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`
const Text = styled.h4`
  flex: 2;
`
const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  max-height: 290px;
  margin-left: 80px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const Ariticle = () => {

  return (
    <Artical>
      <Content>
      <h1>Self-Development Program</h1>
        <Text>
          Due to the global transformation of technology in recent years, the
          challenges we deal with have changed drastically in comparison to a few
          decades ago. These challenges are constantly impacting education, the
          workplace and our home life. To cope with the increasing pace of
          modern-day life in the 21st century, you need to take a proactive
          approach in ensuring you are always developing yourself as a Muslim.
          Join our instructors on a wide-range of courses to become the best
          version of yourself, and in the process, get closer to the One who
          created you.
        </Text>
      </Content>
      <ImageContainer><img src="/Images/articlepic.jpg"/></ImageContainer>
    </Artical>
  );
};

export default Ariticle;
