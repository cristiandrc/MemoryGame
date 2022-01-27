const URL = "https://rickandmortyapi.com/api/character";

const getData = async (url = URL) => {
  const response = await fetch(url);
  const data = await response.json();
  const characters = data.results
    .slice(0, 10)
    .flatMap((e) => [e, { ...e, id: e.id + "clone" }])
    .sort(() => Math.random() - 0.5);
  return characters;
};

export default getData;
