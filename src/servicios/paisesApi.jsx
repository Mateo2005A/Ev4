export const getCountryByName = async (nombre = "") => {
  const url = `https://restcountries.com/v3.1/name/${nombre}`;

  try {
    const response = await fetch(url);
    if (!response.ok) return [];

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al conectar con la API:", error.message);
    return [];
  }
};