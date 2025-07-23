const PaisesCard = ({ data }) => {
  const {
    name,
    flags,
    capital,
    region,
    population,
    languages
  } = data;

  const listaIdiomas = languages
    ? Object.values(languages).join(", ")
    : "Desconocido";

  return (
    <div
      className="card shadow-sm"
      style={{
        background: "transparent",
        borderColor: "#ccc",
        minWidth: "250px"
      }}
    >
      <div className="card-body text-center">
        <h5 className="card-title text-white">{name.official}</h5>
        <img
          src={flags.svg}
          alt={`Bandera de ${name.official}`}
          className="img-fluid"
          style={{ maxWidth: "180px", marginBottom: "1rem" }}
        />
        <p className="card-text text-white">
          <strong>Capital:</strong> {capital?.[0] || "No disponible"}
        </p>
        <p className="card-text text-white">
          <strong>Continente:</strong> {region}
        </p>
        <p className="card-text text-white">
          <strong>Idiomas:</strong> {listaIdiomas}
        </p>
        <p className="card-text text-white">
          <strong>Población:</strong> {population.toLocaleString()} hab.
        </p>
      </div>
    </div>
  );
};

export default PaisesCard;