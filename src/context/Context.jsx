import { createContext, useEffect, useState } from "react";
import getData from "../utils/getData";

const Context = createContext();

// const initialState = await result.reduce((a, c) => {
//   return { ...a, [c.id]: { id: c.id, rotate: false, disable: false } };
// }, {});

const ContextProvider = ({ children }) => {
  const [characters, setCharacter] = useState([]);
  const [rotate, setRotate] = useState({});
  const [cards, setCards] = useState([]);

  const startGame = async () => {
    const data = await getData();
    const initialState = await data.reduce((a, c) => {
      return { ...a, [c.id]: false };
    }, {});
    console.log(initialState);
    setCharacter(data);
  };

  const verifyCards = () => {
    if (cards.length === 1) console.log("hola");
  };

  const rotateCard = (id) => {
    setRotate({ ...rotate, [id]: true });
    setCards([...cards, id]);
    verifyCards();
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <Context.Provider value={{ characters, rotate, rotateCard }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
