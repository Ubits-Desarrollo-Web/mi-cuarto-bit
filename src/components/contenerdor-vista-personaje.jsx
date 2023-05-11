import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetallesPersonaje from "./detalles-personaje";
import ErrorBoundary from "./error-boundary";

const buscarPersonaje = async (id) => {
  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  const respuesta = await fetch(apiUrl)
    .then((res) => res.json())
    .catch(() => {
      throw new Error("El ID no existe");
    });

  return respuesta;
};

const ContenedorDetalles = () => {
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    buscarPersonaje(id)
      .then((resp) => {
        setPersonaje(resp);
        setCargando(false);
      })
      .catch((e) => console.log(e, "error"));
  }, [id]);

  return !cargando ? (
    <div className="Detalles">
      <DetallesPersonaje personaje={personaje} />
    </div>
  ) : (
    <div>
      <h1>Cargando...</h1>
    </div>
  );
};

const DetallesErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <ContenedorDetalles />
    </ErrorBoundary>
  );
};

export default DetallesErrorBoundary;
