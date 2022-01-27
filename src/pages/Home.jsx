import { useContext } from "react";
import { Context } from "../context/Context";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";

import "./home.scss";

const Home = () => {
  const { characters } = useContext(Context);

  return (
    <section className="home">
      <Cards>
        {characters.map((data, i) => (
          <Card key={data.id} {...data} />
        ))}
      </Cards>
    </section>
  );
};

export default Home;
