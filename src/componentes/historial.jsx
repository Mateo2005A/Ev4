const Historial = ({ historial, onClear }) => {
  return (
    <div className="mb-3">
      <h5 className="text-white">Historial de búsquedas:</h5>
      <ul className="list-group mb-2">
        {historial.map((pais, idx) => (
          <li key={idx} className="list-group-item">
            {pais}
          </li>
        ))}
      </ul>
      <button onClick={onClear} className="btn btn-danger">
        Eliminar historial
      </button>
    </div>
  );
};

export default Historial;