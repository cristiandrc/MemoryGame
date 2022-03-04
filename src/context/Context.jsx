import { createContext, useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
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

  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const startGame = async () => {
    reset();
    pause();
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
    if (isComplete) {
      pause();
      setGameWon(true);
    }
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
    !movements && start();
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
        seconds,
        minutes,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
