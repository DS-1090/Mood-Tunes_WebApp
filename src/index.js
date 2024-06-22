import React from 'react';
import ReactDOM from 'react-dom/client';
import './mt_style.css';
import App from './mt_app.js';
import reportWebVitals from './reportWebVitals';
import Navbars from './mt_nav.js';
import AboutPage from './mt_about.js';
import AudioPlayer from './mt_audio.js'; 

function Footer(){
  return(
    <div>
<footer style={{ backgroundColor: '#353B3B', color: '#ffffff', textAlign: 'center', padding: '10px 0', fontSize:'100%' }}>
  <p>Made with ❤ by Divya  <br/> &copy; 2024 Mood-Tunes. All rights reserved.</p>
</footer>
</div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbars />
    <App />
    <AboutPage/>
    <Footer/>
    <AudioPlayer/>
  </React.StrictMode>
);
//    <ArtistProfile/>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
