import React, { useState, useEffect } from 'react';
import { getAccessToken } from "../utils/spotifyAuth";
import { searchTracks } from "../utils/spotifySearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../css/inicio.css"

const Pesquisa = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [erro, setErro] = useState(null);
    const [showMusic, setShowMusic] = useState(true)
    const [showArtist, setShowArtist] = useState(false)
    const [showAlbum, setShowAlbum] = useState(false)

    const handleSearch = async (e, tipo) => {
        setQuery(e)
        setErro(null);
        const token = await getAccessToken();

        if (token) {
            try {
                const results = await searchTracks(e, token, tipo);
                setSearchResults(results);
                console.log(results)

            } catch (error) {
                setErro([]);
                setSearchResults([])
                console.log("erro ao procurar")

            }
        }
    }

    useEffect(() => {
        if (showMusic) {
            handleSearch(query, 'track');
        } else if (showArtist) {
            handleSearch(query, 'artist');
        } else{
            handleSearch(query, 'album');
        } 

        if(query.length > 0 && searchResults.length === 0){
            setErro(["Nenhuma música encontrada"])
        }
    }, [query, showMusic, showArtist, showAlbum]);


    return (
        <div className='container-search'>
            <div className='ipt_search'>
                <div className='pesq'>

                    <div className='pesq-flex'>
                        <input
                            placeholder="Pesquisar"
                            value={query}
                            onChange={(e) => {

                                if (showMusic) {
                                    handleSearch(e.target.value, 'track');
                                } else if (showArtist) {
                                    handleSearch(e.target.value, 'artist');
                                } else {
                                    handleSearch(e.target.value, 'album');
                                }
                                
                            }}
                        />

                        <div className='search-icon'>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>

                    </div>

                    <div className='btns'>
                        <div onClick={() => { setShowMusic(true); setShowArtist(false); setShowAlbum(false); setSearchResults([]) }}
                            id={showMusic ? 'active' : null} className='pesquisar'>Musica</div>

                        <div onClick={() => { setShowMusic(false); setShowArtist(true); setShowAlbum(false); setSearchResults([]) }}
                            id={showArtist ? 'active' : null} className='pesquisar'>Artista</div>

                        <div onClick={() => { setShowMusic(false); setShowArtist(false); setShowAlbum(true); setSearchResults([]) }}
                            id={showAlbum ? 'active' : null} className='pesquisar'>Álbum</div>
                    </div>

                    <div className='erro'>
                        {erro && <div>{erro}</div>}
                    </div>

                </div>
            </div>


            <div className='scroll'>
                {showMusic && <>
                    {searchResults.map((track) => (
                        <div className='musica' key={track.id}>

                            <img src={track.album.images[0]?.url}></img>

                            <div className='info-musica'>
                                <span className="title-musica">{track.name}</span>
                                <span className="album-musica">{track.album.name}</span>
                                <span className="artista-musica">{track.artists.map((artist) => artist.name).join(", ")}</span>
                                <a href={track.external_urls.spotify} className="url-musica">Ouça agora</a>
                                <audio controls>
                                    <source src={track.preview_url} type="audio/mpeg" />
                                </audio>

                            </div>

                        </div>
                    ))}
                </>
                }

                {showArtist && <>
                    {searchResults.map((artist) => (

                        <div className='musica' key={artist.id}>

                            <img src={artist.images[0]?.url}></img>

                            <div className='info-musica'>
                                <span className="title-musica">{artist.name}</span>
                                <span className="album-musica">{artist.genres.map((genero) => genero).join(", ")}</span>
                                <span className="popularity">Seguidores: {artist.followers.total}</span>
                                <a href={artist.external_urls.spotify} className="url-musica">Ver Perfil</a>

                            </div>

                        </div>
                    ))}
                </>
                }

                {showAlbum && <>
                    {searchResults.map((album) => {
                        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                        const dataBr = new Date(album.release_date).toLocaleDateString('pt-BR', options);

                        return (
                            <div className='musica' key={album.id}>

                                <img src={album.images[1]?.url} alt={album.name} />

                                <div className='info-musica'>
                                    <span className="title-musica">{album.name}</span>
                                    <span className="album-musica">{album.artists[0].name}</span>
                                    <span>Lançamento: {dataBr}</span>
                                    <span>{album.total_tracks === 1 ? 'Single' : 'Total de Músicas: ' + album.total_tracks}</span>
                                    <a href={album.external_urls.spotify} className="url-musica">Ouça Agora</a>
                                </div>

                            </div>
                        );
                    })}
                </>
                }
            </div>

        </div>
    );
};

export default Pesquisa;
