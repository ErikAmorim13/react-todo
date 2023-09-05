import "../css/content.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Content() {
    const navigate = useNavigate();

    const handleEntrarClick = () => {
        navigate('/login');
    };

    return (
        <div className="content">
            <span className="title">Conhecendo o Music Player</span>

            <span className="subtitle">
                O Music Player foi criado para ser o seu universo particular,
                te conectando com suas músicas e artistas preferidos. Inspirado no spotify
                onde você pode criar playlists e salvar músicas que lhe interessam.
            </span>

            <div className="info">
                <div className="info-item">
                    <img src="https://play-lh.googleusercontent.com/nvz-bAP4aoChSpyENnKdNjMDeeRxCifE_VdTA4U-bJeKeZOAlZesFxFJ72yKlCJR2ro" />

                    <span className="info-title">Integrado com Spotify API</span>
                    <span className="info-subtitle">Logue com a sua conta spotify e descubra informações sobre o seu artista favorito</span>
                </div>

                <div className="info-item">
                    <FontAwesomeIcon icon={faHeadphones} className="icon" />

                    <span className="info-title">Ouça suas músicas favoritas</span>
                    <span className="info-subtitle">Com o player de música, descubra e ouça músicas da maneira que preferir</span>
                </div>

                <div className="info-item">
                    <FontAwesomeIcon icon={faCircleInfo} className="icon" />

                    <span className="info-title">Acesse informações de artistas</span>
                    <span className="info-subtitle">Descubra curiosidades, álbuns, principais músicas e diversos outros dados do seu artista preferido</span>
                </div>
            </div>

            <button onClick={handleEntrarClick}>Entrar</button>
        </div>

    )
}

export default Content;

