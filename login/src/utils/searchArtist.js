import axios from "axios";

const spotifyApi = process.env.REACT_APP_SPOTIFY_API

export const searchArtists = async (query, token) => {
    try {
      const response = await axios.get(`${spotifyApi}/search`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          type: 'artist', 
        },
      })
      return response.data.artists.items
      
    } catch (error) {
      throw new Error('Erro ao realizar a pesquisa de artistas.')
    }
  }

export default searchArtists;