import Card from "../Card/Card";
import "./cards.scss";

const Cards = ({ children }) => {
  return <section className="cards">{children}</section>;
};

export default Cards;
