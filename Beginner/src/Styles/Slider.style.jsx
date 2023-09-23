import styled from "styled-components";

export const SliderMomContent = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0.8rem 0;
    text-align: left;
`
export const SliderMomContainer = styled.div`
`
export const Title = styled.h1`
    font-size: 1.6rem;
    margin: 0 auto;
    color: whitesmoke;
    font-weight: 100;
`

export const WrapMomSlide = styled.div`
`
export const SliderSonContainer = styled.div`
    position: relative;
`
export const SliderSonItemContainer = styled.div`
    height: 10rem;
    margin: 1rem 0.6rem;
    padding: 0.3rem 0.3rem;
    border-radius: 5px; 
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        transition: 400ms ease-in-out;

        &:hover{
            transform: scale(1.1);
        }
    }
`
export const ButtonSliderContainer = styled.div`
    button{
        width: 2rem;
        height: 2rem;
        background-color: rgba(255,255,255,0.1);
        cursor: pointer;
        color: whitesmoke;
        border: none;
        position: absolute;
        top: 45%;
        right: -1rem;
    }
    .back{
        left: -1rem;
    }
`