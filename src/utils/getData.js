const URL = "https://rickandmortyapi.com/api/character";

const status = {
  rotate: false,
};

const getData = async (url = URL) => {
  const response = await fetch(url);
  const data = await response.json();
  const characters = data.results
    .slice(0, 10)
    .flatMap((e) => [
      { id: e.id, image: e.image, rotate: false },
      { id: e.id + "clone", image: e.image, rotate: false },
    ])
    .sort(() => Math.random() - 0.5);
  return characters;
};

export default getData;
