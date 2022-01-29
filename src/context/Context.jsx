import { createContext, useEffect, useState } from "react";
import getData from "../utils/getData";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [characters, setCharacter] = useState([]);
  const [rotate, setRotate] = useState({});
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState();
  const [click, setClick] = useState(true);
  const [movements, setMovements] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const startGame = async () => {
    setLoading(true);
    const data = await getData();
    const initialRotate = await data.reduce((a, c) => {
      return { ...a, [c.id]: false };
    }, {});
    setRotate(initialRotate);
    setCharacter(data);
    setMovements(0);
    setGameWon(false);
    setLoading(false);
  };

  const winGame = () => {
    const isComplete = Object.values(rotate).every((e) => e === true);
    isComplete && setGameWon(true);
  };

  const verifyCards = (id) => {
    setClick(false);
    if (cards.split("-")[0] === id.split("-")[0]) {
      setCards("");
      setClick(true);
    } else {
      setTimeout(() => {
        setRotate({ ...rotate, [id]: false, [cards]: false });
        setClick(true);
      }, 1000);
      setCards("");
    }
  };

  const rotateCard = (id) => {
    if (click) {
      setRotate({ ...rotate, [id]: true });
      setCards(id);
      cards && verifyCards(id);
      setMovements(movements + 1);
    }
  };

  useEffect(winGame, [rotate]);

  useEffect(startGame, []);

  return (
    <Context.Provider
      value={{
        loading,
        characters,
        startGame,
        rotate,
        movements,
        rotateCard,
        gameWon,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
