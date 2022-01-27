import { useState } from "react";
import backgroundImg from "../../assets/background.jpg";
import "./card.scss";

const Card = ({ image }) => {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => setRotate(!rotate);

  return (
    <article onClick={toggleRotate} className={`card ${rotate && "rotate"}`}>
      <div className="card-face">
        <img src={backgroundImg} alt="img" />
      </div>
      <div className="card-backface">
        <img src={image} alt="img" />
      </div>
    </article>
  );
};

export default Card;
