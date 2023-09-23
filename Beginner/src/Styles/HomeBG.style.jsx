import styled from "styled-components";

export const BackgroundContainer = styled.div`
    display: flex;
    margin-bottom: 3rem;
    height: 100vh;
    /* background-color: black; */
    background: url('/Images/library.jpg')center;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.5);
`
export const BackgroundContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
`
export const Title = styled.h1`
    font-size: 40px;
    font-weight: bolder;
`
export const Text = styled.p`
    font-size: 16px;
    margin: 15px 0 ;
    max-width: 550px;
    letter-spacing: 2px;
`
export const Button = styled.button`
    color: inherit;
    text-decoration: none;
    background-color: #B53389;
    border: none;
    padding: 8px 50px;
    font-size: 22px;
    border-radius: 10px;
    cursor: pointer;

    &:hover{
        filter:brightness(120%);
        transition: 0.7s;
    }
`