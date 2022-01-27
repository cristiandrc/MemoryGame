const URL = "https://rickandmortyapi.com/api/character";
export const getData = async (url = URL) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
