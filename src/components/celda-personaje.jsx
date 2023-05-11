import React from "react";
import { useNavigate } from "react-router-dom";

const CeldaPersonaje = (props) => {
  const { nombre, imagen, id } = props;
  return (
    <div className="Celda">
      <img src={imagen} alt={nombre} />
      <div className="Celda-texto">{nombre}</div>
    </div>
  );
};

export default CeldaPersonaje;
