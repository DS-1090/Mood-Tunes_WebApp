import React, { useEffect, useState } from "react";
import "./mt_style1.css";
import './mt_app.js';
import Sentiment from 'sentiment';

const CLIENT_ID = "45e65cfe12dc47f598cc9f7d4dd4bbd6";
const CLIENT_SECRET = "30c3c7137f5141c391784be2e498426a";
const SPOTIFY_API_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_SEARCH_URL = "https://api.spotify.com/v1/search";
var ARTIST_ID = "06HL4z0CvFAxyc27GXpf02";

async function getArtistID() {
    var sel = document.getElementById('ArtistSelect').value;
    if (sel == "Taylor Swift") ARTIST_ID = "06HL4z0CvFAxyc27GXpf02";
    else if (sel == "Adele") ARTIST_ID = "4dpARuHxo51G3z768sgnrY";
    else if (sel == "Ariana Grande") ARTIST_ID = "66CXWjxzNUsdJxJ2JdwvnR";
    else if (sel == "Harry Styles") ARTIST_ID = "6KImCVD70vtIoJWnq6nGn3";
    else if (sel == "Billie Ellish") ARTIST_ID = "6qqNVTkY8uBg9cP3Jd7DAH";
    
    
}

async function getAccessToken() {
    const response = await fetch(SPOTIFY_API_TOKEN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        },
        body: "grant_type=client_credentials",
    });
    const data = await response.json();
    await getArtistID(); 
    return data.access_token;
}

// const getArtistGenres = async (accessToken, artistId) => {
//   const response = await fetch(
//     `https://api.spotify.com/v1/artists/${artistId}`,
//     {
//       headers: {
//         Authorization: "Bearer " + accessToken,
//       },
//     }
//   );
//   const data = await response.json();
//    return data.genres;
// };

const getTopTracks = async (accessToken, artistId, market) => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=${market}`,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
  const data = await response.json();
  console.log(data);

  return data.tracks.slice(0, 5);
};
 

const getArtistDetails = async (accessToken, artistId) => {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}`,
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
  const data = await response.json();
  console.log("artist details"+ JSON.stringify(data));
  return data;
};

const ArtistProfile = () => {
  const [genres, setGenres] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [artistImages, setArtistImages] = useState([]);
  const [sentimentCategories, setSentimentCategories] = useState([]);
  useEffect(() => {
    const categorizeSentiments = () => {
      const sentiment = new Sentiment();
      const categories = topTracks.map(track => {
        const score = sentiment.analyze(track.name).score;
        if (score === 0) {
          return 'Neutral';
        } else if (score < 0) {
          return 'Melancholy';
        } else {
          return 'Joyous';
        }
      });
      setSentimentCategories(categories);
    };

    categorizeSentiments();
  }, [topTracks]);

    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await getAccessToken();
        const artistDetails = await getArtistDetails(accessToken, ARTIST_ID);
        
        setArtistImages(artistDetails.images);

        const artistGenres = artistDetails.genres;
        setGenres(artistGenres);

        const tracks = await getTopTracks(accessToken, ARTIST_ID, "US");
        setTopTracks(tracks);
      } 
      catch (error) {
        console.error("Error fetching Artist's profile:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="output">
      <h4 style={{ color: "CadetBlue", fontSize: 50 }}>Artist</h4>
      <h5 style={{ color: "CadetBlue", fontSize: 30 }}>Genres:</h5>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <div className="artist-images" style={{ marginBottom: "20px" }}>
        {artistImages.length > 0 && (
          <img
            src={artistImages[0].url}
            alt="Artist Image"
            className="circular-image"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        )}
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", color: "CadetBlue", fontSize: 25 }}>
              Track Name
            </th>
            <th style={{ padding: "10px", color: "CadetBlue", fontSize: 25 }}>
              Mood
            </th>
            <th style={{ padding: "10px", color: "CadetBlue", fontSize: 25 }}>
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {topTracks.map((track, index) => (
            <tr key={index}>
              <td
                style={{ padding: "8px", color: "CadetBlue", fontSize: "150%" }}
              >
                <a
                  href={track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "CadetBlue",
                  }}
                >
                  {track.name}
                </a>
              </td>
              <td
                style={{ padding: "8px", color: "CadetBlue", fontSize: "150%" }}
              >
                {sentimentCategories[index]}
              </td>
              <td
                style={{ padding: "8px", color: "CadetBlue", fontSize: "150%" }}
              >
                {Math.round(track.duration_ms / 60000)} minutes
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistProfile;
