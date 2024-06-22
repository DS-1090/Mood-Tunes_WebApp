import React, { useEffect } from 'react';
import willowAudio from './willow.mp3';  

function AudioPlayer() {
  useEffect(() => {
    const audio = new Audio(willowAudio);  
    audio.play();
  }, []);

  return null;  
}

export default AudioPlayer;
