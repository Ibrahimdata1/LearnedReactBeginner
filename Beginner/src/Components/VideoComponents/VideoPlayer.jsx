
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import {VideoPlayerContainer} from '../../Styles/Video.style'
import React from "react";
import { CartContext } from "../Context";


const VideoPlayer = () => {
    const {urlVid} = React.useContext(CartContext)
  return (
    <VideoPlayerContainer>
      <Player src={urlVid} poster='/Images/pixelbg4.jpg' dimensions={{ width: "70vw", height: "75vh" }}/>
    </VideoPlayerContainer>
  )
}

export default VideoPlayer
