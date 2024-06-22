 
import React, { useState } from 'react';
import ArtistProfile from './mt_api';  

function App() {
  const [showArtistProfile, setShowArtistProfile] = useState(false);

  const handleSubmission = () => {
    document.getElementById("submit").disabled = true;
    setShowArtistProfile(true);
  };

  return (
    <div className="Apps">
      <br />
      <br />
      <div className='Head'>
             <h1 >Mood Tunes</h1>
      <h1  >Mood Tunes</h1>
      </div>
 
      <br />
      <br />
      <br />
      <br />
       <select id="ArtistSelect" className="Artist">
        <option value="Taylor Swift">Taylor Swift</option>
        <option value="AR Rahman">AR Rahman</option>
        <option value="Shreya Ghosal">Shreya Goshal</option>
      </select>&nbsp;
      <input type="submit" id = "submit" onClick={handleSubmission} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='Result'>
         {showArtistProfile && <ArtistProfile />}
      </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<br></br>

        </div>
    );
  }
  
  export default App;
  