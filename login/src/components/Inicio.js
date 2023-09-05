// Componente Inicio.js
import React from "react";
import "../css/inicio.css";
import HeaderInicio from "./headerInicio";
import Pesquisa from "./Pesquisa";

function Inicio() {

  return (
    <div className="container-inicio">

      <HeaderInicio 
      title="DESCOBRINDO NOVOS GOSTOS" 
      subtitle="Navegue por todo o catálogo e descubra musicas e artistas de todo o mundo!"/>

      <Pesquisa />
    </div>
  );
}

export default Inicio;