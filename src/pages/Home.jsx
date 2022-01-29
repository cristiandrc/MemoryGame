import { useContext } from "react";
import { Context } from "../context/Context";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import Portal from "../components/Portal/Portal";
import Win from "../components/Win/Win";
import "./home.scss";

const Home = () => {
  const { loading, characters, startGame, movements, gameWon } =
    useContext(Context);

  return (
    <>
      <section className="home">
        {loading && (
          <Portal>
            <Loading />
          </Portal>
        )}
        {gameWon && !loading && (
          <Portal>
            <Win movements={movements} onClick={startGame} />
          </Portal>
        )}

        {!loading && (
          <>
            <Cards>
              {characters.map((data, i) => (
                <Card key={data.id} {...data} />
              ))}
            </Cards>
            <div className="home-menu">
              <span>Movimientos {movements}</span>
              <button onClick={startGame}>play again</button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Home;
