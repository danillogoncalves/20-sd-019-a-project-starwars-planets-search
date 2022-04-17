const fetchApi = async () => {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(ENDPOINT);
  const json = await response.json();
  json.results.forEach((planet) => delete planet.residents);

  return response.ok
    ? Promise.resolve(json.results)
    : Promise.reject(json);
};

export default fetchApi;
