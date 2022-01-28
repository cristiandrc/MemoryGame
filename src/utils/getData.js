const URL = "https://rickandmortyapi.com/api/character?page=";

const status = {
  rotate: false,
};

const getData = async (url = URL) => {
  const response = await fetch(url);
  const data = await response.json();
  const pageRandom = Math.floor(Math.random() * --data.info.pages);
  const response2 = await fetch(url + pageRandom);
  const character = await response2.json();

  const result = character.results
    .slice(0, 10)
    .flatMap((e) => [
      { id: `${e.id}`, image: e.image, rotate: false },
      { id: e.id + "-", image: e.image, rotate: false },
    ])
    .sort(() => Math.random() - 0.5);

  return result;
};

export default getData;
