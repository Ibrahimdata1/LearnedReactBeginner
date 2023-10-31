import {Container,Wrapper,Title,Form,Input,Agreement,Button} from '../Styles/Register.style'


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="lasname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, l consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button as='a' href='/'>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;