 
import React, { useState } from 'react';
import ArtistProfile from './mt_api';  
import AudioPlayer from './mt_audio';

function App() {
  const [showArtistProfile, setShowArtistProfile] = useState(false);
  const [playAudioPlayer, setplayAudioPlayer] = useState(false);
  const handleSubmission = () => {
    document.getElementById("submit").disabled = true;
document.getElementById("submit").style.opacity = 0;
document.getElementById("ArtistSelect").style.opacity = 0;

    
    setShowArtistProfile(true);
    setplayAudioPlayer(true);
  };

  return (
    <div className="Apps">
      <AudioPlayer></AudioPlayer>
      <br />
      <br />
      <div className="Head">
        <h1>Mood Tunes</h1>
        <h1>Mood Tunes</h1>
      </div>
      <div style={{ height: "100px" }}></div>
      <select id="ArtistSelect" className="Artist">
        <option value="Taylor Swift">Taylor Swift</option>
        <option value="Adele">Adele</option>
        <option value="Ariana Grande">Ariana Grande</option>
        <option value="Harry Styles">Harry Styles</option>
        <option value="Billie Ellish">Billie Ellish</option>
      </select>
      &nbsp;
      <input type="submit" id="submit" onClick={handleSubmission} />
      <div style={{ height: "100px" }}></div>
      {playAudioPlayer && <AudioPlayer />}
      <div className="Result">{showArtistProfile && <ArtistProfile />}</div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}
  
  export default App;
  
