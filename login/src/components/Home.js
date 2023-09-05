import IconWhite from "./IconWhite";
import Content from "./Content";
import Sobre from "./Sobre";
import ContactMe from "./ContactMe";
import "../css/home.css";

function Home() {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID 

  const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3000/inicio`;

  const handleLogin = () => {
    window.location.href = authorizationUrl
  };

  return (
    <div className="container">
      <div className="header-wrapper">
        <div className="header">

          <div className="list">
            <IconWhite className="icon-white" width="10vh" height="10vh" />

            <li><a href="">Início</a></li>
            <li><a href="">Sobre Mim</a></li>
            <li><a href="">Contate-me</a></li>
            <li>|</li>
            <li><a onClick={handleLogin}>Entrar</a></li>
          </div>

        </div>
      </div>

      <Content />
      <Sobre />
      <ContactMe />
    </div>
  );
}

export default Home;
