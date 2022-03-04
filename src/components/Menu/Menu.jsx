import "./menu.scss";
import Button from "../Button/Button";
const Menu = ({ movements, startGame, time }) => {
  return (
    <div className="menu">
      <span>Movimientos: {movements}</span>
      <span>
        {time.minutes > 9 ? time.minutes : `0${time.minutes}`}:
        {time.seconds > 9 ? time.seconds : `0${time.seconds}`}
      </span>
      <Button onClick={startGame} />
    </div>
  );
};

export default Menu;
