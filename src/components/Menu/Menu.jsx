import "./menu.scss";
import Button from "../Button/Button";
const Menu = ({ movements, startGame }) => {
  return (
    <div className="menu">
      <span>Movimientos: {movements}</span>
      <Button onClick={startGame} />
    </div>
  );
};

export default Menu;
