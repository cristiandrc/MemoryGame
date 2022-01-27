import { useContext } from "react";
import { Context } from "../../context/Context";
import backgroundImg from "../../assets/background.jpg";
import "./card.scss";

const Card = ({ id, image }) => {
  const { rotate, rotateCard } = useContext(Context);

  return (
    <article
      onClick={() => rotateCard(id)}
      className={`card ${rotate[id] && "rotate"}`}
    >
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
