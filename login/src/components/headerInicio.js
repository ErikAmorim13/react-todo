import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/sidebar.css"

function HeaderInicio({ title, subtitle }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <>
            <div className="header-inicio">
                <div className="toggle-icon" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <div className="toggle-icon" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>

                    <ul>
                        <li>
                            <Link to="/inicio">Início</Link>
                        </li>

                        <li>
                            <Link to="/top-global">Top Global</Link>
                        </li>

                        <li>
                            <Link to="/novidades">Novidades</Link>
                        </li>

                        <li>
                            <div id="maisOuvidas">
                                <Link to="/global-brasil">Mais Ouvidas - Brasil</Link>
                            </div>
                        </li>
                    </ul>

                    <div className="out">
                        <Link to="/">Sair</Link>
                    </div>

                </div>

                <h1>{title}</h1>
            </div>

            <p>{subtitle}</p>

        </>

    )
}

export default HeaderInicio