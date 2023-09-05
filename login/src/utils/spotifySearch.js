import axios from 'axios';

const spotifyApi = process.env.REACT_APP_SPOTIFY_API

export const searchTracks = async (query, token, tipo) => {
  try {
    const response = await axios.get(`${spotifyApi}/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: tipo,
      },
    });

    if(tipo === 'track'){
      return response.data.tracks.items;
    }else if(tipo === 'artist'){
      return response.data.artists.items;
    }else{
      return response.data.albums.items;
    }
    
  } catch (error) {
    throw new Error('Erro ao realizar a pesquisa.');
  }
};
