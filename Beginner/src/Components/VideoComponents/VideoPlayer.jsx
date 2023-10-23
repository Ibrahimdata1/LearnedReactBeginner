import styled from "styled-components";
import {css} from 'styled-components'
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import {VideoPlayerContainer} from '../../Styles/Video.style'
import React from "react";
import { CartContext } from "../Context";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
export const ipad = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (min-width: 993px) {
      ${props}
    }
  `;
};
const VideoContentMobile = styled.div`
  ${desktop({ display:'none'})}
  ${ipad({ display:'none'})}
  ${mobile({ display:'block'})}
`
const VideoContentDesktop = styled.div`
  ${mobile({ display:'none'})}
  ${ipad({ display:'none'})}
`
const VideoContentIpad = styled.div`
  ${desktop({ display:'none'})};
  ${mobile({ display:'none'})}
`
const VideoPlayer = () => {
    const {urlVid} = React.useContext(CartContext)

  return (
    <VideoPlayerContainer>
      <VideoContentMobile>
        <Player src={urlVid} dimensions= {{ width: "90vw", height: "30vh" }} />
      </VideoContentMobile>
      <VideoContentIpad>
      <Player src={urlVid} dimensions= {{ width: "90vw", height: "60vh" }} />
      </VideoContentIpad>
      <VideoContentDesktop>
        <Player src={urlVid} dimensions= {{ width: "70vw", height: "75vh" }}/>
      </VideoContentDesktop>
    </VideoPlayerContainer>
  )
}

export default VideoPlayer
