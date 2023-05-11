import React, { useEffect, useState } from "react";
import ListadoPersonajes from "./listado-personajes";
import Paginacion from "./paginacion";
import { apiUrl } from "../utils/utils";

const Home = () => {
  const [nombre, setNombre] = useState("");
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [paginas, setPaginas] = useState(1);
  const [siguientePagina, setSiguientePagina] = useState("");
  const [paginaAnterior, setPaginaAnterior] = useState("");

  const buscarPersonajes = async (url) => {
    setCargando(true);

    await fetch(url)
      .then((res) => res.json())
      .then((resp) => {
        setPaginas(resp.info.pages);
        if (paginas) {
          setPaginaAnterior(resp.info.prev);
          setSiguientePagina(resp.info.next);
        }
        setPersonajes(resp.results);
        setCargando(false);
        setNombre("");
      })
      .catch(() => {
        setCargando(false);
        setPaginaAnterior(undefined);
        setSiguientePagina(undefined);
        setNombre("");
        throw new Error("Error");
      });
  };

  useEffect(() => {
    buscarPersonajes(apiUrl);
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    buscarPersonajes(
      `https://rickandmortyapi.com/api/character?&name=${nombre}`
    ).catch(() => setPersonajes([]));
  };

  return (
    <div>
      <form className="BarraBusqueda" onSubmit={onSubmitHandler}>
        <input
          id="name"
          value={nombre}
          placeholder="Busca personajes por su nombre"
          onChange={(event) => setNombre(event.target.value)}
        />
        <button className="BotonEstilado" type="submit">
          Buscar
        </button>
      </form>
      {cargando && personajes ? (
        <>Cargando...</>
      ) : (
        <div className="Home">
          <ListadoPersonajes volver={buscarPersonajes} lista={personajes} />
          <Paginacion
            pagina={paginas}
            buscarPersonajes={buscarPersonajes}
            siguientePagina={siguientePagina}
            paginaAnterior={paginaAnterior}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
