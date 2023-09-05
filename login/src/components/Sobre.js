import "../css/content.css"

function Sobre() {
    return (
        <div className="container-sobre">
            <div className="data">
                <span className="hold">Desenvolvido por:</span>

                <img className="perfil-image" src="https://media.licdn.com/dms/image/C4D03AQFIpVf1gB0gYA/profile-displayphoto-shrink_200_200/0/1660514162442?e=1695254400&v=beta&t=wyTJ5UvipXgTvdIfOCO_qQWL1GRRWEOlUNUCYvPvbKg"></img>
                <span className="hold">Erik Amorim Rodrigues</span>
                <span>Dev Front-End</span>
                <span>13/12/2003</span>

                <span className="hold">Principais habilidades:</span>

                <div className="tech">
                    <img className="habIcon" src="/react.svg"></img>
                    <img className="habIcon" src="/vuejs.svg"></img>
                    <img className="habIcon" src="/js.svg"></img>
                </div>
            </div>

            <div className="sobre-mim">
                <span className="title-sobre">Sobre Mim:</span>

                <span className="sub-sobre">

                    Meu nome é Erik, tenho 19 anos e sou um estagiário da SPTECH. Como um entusiasta da boa música, idealizei este projeto com o objetivo de compartilhar um pouco do meu trabalho como desenvolvedor, unindo o útil ao agradável e conectando minhas duas paixões.

                    Tenho acumulado experiência como desenvolvedor front-end, trabalhando com os frameworks Vue e React, o que me permitiu aprimorar minhas habilidades e explorar diversas possibilidades criativas.

                    Acredito que a música e a programação têm muito em comum, pois ambas exigem criatividade, dedicação e um olhar atento aos detalhes. Com esse projeto, espero proporcionar uma experiência única aos visitantes, onde eles poderão apreciar a música enquanto exploram o meu trabalho como desenvolvedor.

                    Fique à vontade para navegar pelas seções do projeto e sinta-se à vontade para entrar em contato comigo caso tenha algum feedback ou ideia para compartilhar. Agradeço desde já pela visita e espero que aproveite essa jornada musical e tecnológica comigo!
                </span>
            </div>
        </div>
    )
}

export default Sobre;