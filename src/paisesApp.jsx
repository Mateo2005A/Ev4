import Buscador from "./componentes/buscador";

const PaisesApp = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4 text-white fw-bold">Buscador de Países</h1>
        <p className="lead text-white fw-bold">
          Encuentra información sobre cualquier país
        </p>
      </div>
      <Buscador />
    </div>
  );
};

export default PaisesApp;