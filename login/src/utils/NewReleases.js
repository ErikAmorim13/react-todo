import axios from "axios"

export const NewReleases = async (token, type) =>{
    const spotifyApi = process.env.REACT_APP_SPOTIFY_API

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    try{
        const response = await axios.get(`${spotifyApi}/browse/new-releases`, config)
        
        if(type === 'album'){
            return response.data.albums.items
        }

    }catch(error){
        console.error("Erro ao trazer as novidades");
    }
}