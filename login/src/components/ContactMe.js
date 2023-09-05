import IconContact from "./IconContact";
import "../css/content.css"

function ContactMe() {
    return (
        <div className="contact-container">
            <div className="contact-title">
                <IconContact class="icon-contact" width="15vh" height="15vh" />
                <span className="title">Contate-Me:</span>
            </div>

            <div className="info-contact">
                <div className="item-contact">

                    <div className="item-title">
                        <img className="habIcon" src="/github.svg"></img>
                        <span className="span-title">GitHub</span>
                    </div>

                    <a href="https://github.com/ErikAmorim13" className="name-contact">ErikAmorim13</a>
                </div>

                <div className="item-contact">

                    <div className="item-title">
                        <img className="habIcon" src="/linkedin.svg"></img>
                        <span className="span-title">Linkedin</span>
                    </div>

                    <a href="https://www.linkedin.com/in/erik-amorim-625aa7211/" className="linkedin">Erik Amorim</a>
                </div>

                <div className="item-contact">

                    <div className="item-title">
                        <img className="habIcon" src="/envelope-solid.svg"></img>
                        <span className="span-title">Email</span>
                    </div>

                    <a className="email">erik.rodrigues@sptech.school</a>
                </div>

            </div>

            <div className="footer">
                <span className="footer-text">© 2021 Copyright - Desenvolvido por Erik Amorim. Todos os direitos reservados.</span>
            </div>
        </div>
    )
}

export default ContactMe