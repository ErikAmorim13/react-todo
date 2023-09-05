import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeaderInicio from './headerInicio';
import axios from 'axios';
import { getAccessToken } from '../utils/spotifyAuth';
import '../css/inicio.css'

const spotifyApi = process.env.REACT_APP_SPOTIFY_API

const GlobalBrasil = () => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {

      const token = await getAccessToken();

      if (token) {
        try {
          const response = await axios.get(`${spotifyApi}/playlists/37i9dQZEVXbMXbN3EUUhlg?si=890676bcbeff4149`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPlaylist(response.data);
          console.log(response.data)

        } catch (error) {
          console.error('Erro ao obter a NoRepeat:', error);
        }
      }
    };

    fetchPlaylist();
  }, []);

  if (!playlist) {
    return <div className='container-search'><FontAwesomeIcon icon={faSpinner} className='icon-inicio' /></div>;
  }

  return (
    <>
    <div className='container-inicio'>
      <HeaderInicio title={playlist.name} subtitle={playlist.description}/>

      <div className='container-search'>

        <div className='scroll'>
          {playlist.tracks.items.map((playlist, index) => (
            <div className='musica' key={playlist.track.id}>

              <img src={playlist.track.album.images[0].url}></img>

              <div className='info-musica'>
                <div className='nome'>
                  <span className="title-musica">{index + 1} - {playlist.track.name}</span>
                </div>

                <span className="album-musica">{playlist.track.album.name}</span>
                <span className="artista-musica">{playlist.track.artists.map((artist) => artist.name).join(", ")}</span>
                <a href={playlist.track.external_urls.spotify} className="url-musica">Ouça agora</a>
                <audio controls>
                  <source src={playlist.track.preview_url} type="audio/mpeg" />
                </audio>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>


    </>
  )
}

export default GlobalBrasil;
