import React from "react";
const Paginacion = ({ paginaAnterior, siguientePagina, buscarPersonajes }) => {
  return (
    <div className="Paginacion">
      {paginaAnterior ? (
        <button
          className="BotonEstilado"
          onClick={() => {
            buscarPersonajes(paginaAnterior);
          }}
        >
          &lt;
        </button>
      ) : (
        <div />
      )}
      {siguientePagina ? (
        <button
          className="BotonEstilado"
          onClick={() => {
            buscarPersonajes(siguientePagina);
          }}
        >
          &gt;
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Paginacion;
