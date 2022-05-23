import React, { useRef, useState } from 'react'
import './video.css'
import mealPlayer from '../../assets/meal.mp4'
import {BsPlayCircle, BsPauseCircle} from 'react-icons/bs'


export const Video = () => {
  const [videoPlayer, setVideoPlayer] = useState(false)
  const videoRef = useRef(null);

  const handlePlay = () => {
    setVideoPlayer((prevvideoPlayer) => !prevvideoPlayer);
    if(videoPlayer){
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }
  
  return (
    <div className='videoPlayer'>
        <video 
        src={mealPlayer}
        typeof="video/mp4"
        ref={videoRef}
        controls={false}
        loop
        muted
        />
        <div className='playButton'  onClick={handlePlay} >{videoPlayer ? <BsPauseCircle/> : <BsPlayCircle/>}</div>
    </div>
  )
}
