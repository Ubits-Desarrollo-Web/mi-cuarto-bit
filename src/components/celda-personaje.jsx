import React from "react";
import { useNavigate } from "react-router-dom";

const CeldaPersonaje = (props) => {
  const { nombre, imagen, id } = props;
  const navigate = useNavigate();

  const irPersonaje = () => {
    navigate(`detalles/${id}`);
  };

  return (
    <div className="Celda">
      <img onClick={irPersonaje} src={imagen} alt={nombre} />
      <div className="Celda-texto">{nombre}</div>
    </div>
  );
};

export default CeldaPersonaje;
