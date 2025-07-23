import { useState, useEffect } from "react";
import { getCountryByName } from "../servicios/paisesApi";
import PaisesCard from "./paisesCard";
import Historial from "./historial";

const Buscador = () => {
  const [nombre, setNombre] = useState("");
  const [paises, setPaises] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("historial") || "[]");
    setHistorial(guardado);
  }, []);

  const guardarBusqueda = (paisNombre) => {
    const prev = JSON.parse(localStorage.getItem("historial") || "[]");
    if (!prev.includes(paisNombre)) {
      const actualizado = [...prev, paisNombre];
      localStorage.setItem("historial", JSON.stringify(actualizado));
      setHistorial(actualizado);
    }
  };

  const borrarHistorial = () => {
    localStorage.removeItem("historial");
    setHistorial([]);
  };

  const buscarPais = async () => {
    const data = await getCountryByName(nombre.trim());
    if (data.length === 0) {
      setError("No se encontró el país.");
      setPaises([]);
    } else {
      setError("");
      setPaises(data);
      guardarBusqueda(nombre.trim());
    }
  };

  return (
    <>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Ej. Chile"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button onClick={buscarPais} className="btn btn-primary">
          Buscar
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {historial.length > 0 && (
        <Historial historial={historial} onClear={borrarHistorial} />
      )}

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {paises.map((pais) => (
          <PaisesCard key={pais.cca3} data={pais} />
        ))}
      </div>
    </>
  );
};

export default Buscador;