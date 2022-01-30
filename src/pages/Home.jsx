import { useContext } from "react";
import { Context } from "../context/Context";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";
import Menu from "../components/Menu/Menu";
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
            <Menu startGame={startGame} movements={movements} />
          </>
        )}
      </section>
    </>
  );
};

export default Home;
