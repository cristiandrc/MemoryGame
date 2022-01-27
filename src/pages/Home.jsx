import { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import Card from "../components/Card/Card";

import getData from "../utils/getData";
import "./home.scss";

const Home = () => {
  const [characters, setCharacter] = useState([]);

  useEffect(async () => {
    const result = await getData();

    console.log(result);
    setCharacter(result);
  }, []);

  return (
    <section className="home">
      <Cards>
        {characters.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </Cards>
    </section>
  );
};

export default Home;
