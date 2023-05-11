import React from "react";
import { useNavigate } from "react-router-dom";

const Detalles = ({ personaje }) => {
  const { name = "", episode = [], image = "" } = personaje;

  return (
    <div>
      {!personaje ? (
        <></>
      ) : (
        <div className="Personaje">
          <div className="Personaje-container">
            <div>
              <ul>
                <li>
                  <b>Nombre: </b>
                  {name}
                </li>
                <li>
                  <b>Cantidad de Espisodios:</b> {episode.length}
                </li>
              </ul>
            </div>
            <div className="Personaje-imagen">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      )}
      <div className="Volver">
        <button
          className="BotonEstilado"
          onClick={() => {}}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default Detalles;
