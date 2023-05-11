import React from "react";
import CeldaPersonaje from "./celda-personaje";
import { apiUrl } from "../utils/utils";

const ListadoPersonajes = ({ volver, lista }) => {
  return (
    <div>
      {!lista || lista.length === 0 ? (
        <div>
          <div className="SinResultados">No hay resultados</div>
          <button onClick={() => volver(apiUrl)} className="BotonEstilado">
            Reiniciar
          </button>
        </div>
      ) : (
        <div className="ListaResultados">
          {lista?.map((personaje) => (
            <CeldaPersonaje
              key={personaje.id}
              id={personaje.id}
              nombre={personaje.name}
              imagen={personaje.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListadoPersonajes;
