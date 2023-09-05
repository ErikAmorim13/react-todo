import { getAccessToken } from "../utils/spotifyAuth";
import { NewReleases } from "../utils/NewReleases";
import "../css/inicio.css";
import { useEffect, useState } from "react";
import HeaderInicio from "./headerInicio";

const Novidades= () => {
    const [novidadesAlbuns, setNovidadesAlbuns] = useState([]);

    useEffect(() => {
        const fetchNovidades = async () => {
            const token = await getAccessToken();

            if (token) {
                const releases = await NewReleases(token, 'album');
                setNovidadesAlbuns(releases);
                console.log(novidadesAlbuns)
            }
        };

        fetchNovidades();
    }, []);

    const dataBr = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('pt-BR', options);
    };

    return (
        <div className='container-inicio'>

            <HeaderInicio title='Radar de Novidades' subtitle='Os lançamentos mais recentes e imperdíveis!' />
            <div className='scroll' id="sc-new">

                {novidadesAlbuns.map((album) => (
                    <div className='musica' key={album.id}>
                        <img src={album.images[1]?.url} alt={album.name} />

                        <div className='info-musica'>
                            <span className="title-musica">{album.name}</span>
                            <span className="album-musica">{album.artists[0].name}</span>
                            <span>Lançamento: {dataBr(album.release_date)}</span>
                            <span>{album.total_tracks === 1 ? 'Single' : 'Total de Músicas: ' + album.total_tracks}</span>
                            <a href={album.external_urls.spotify} className="url-musica">Ouça Agora</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Novidades;
