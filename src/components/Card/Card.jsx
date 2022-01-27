import { useState } from "react";
import backgroundImg from "../../assets/background.jpg";
import "./card.scss";

const Card = ({ active }) => {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => setRotate(!rotate);

  return (
    <div onClick={toggleRotate} className={`card ${rotate && "rotate"}`}>
      <div className="card-face">
        <img src={backgroundImg} alt="" />
      </div>
      <div className="card-backface">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
