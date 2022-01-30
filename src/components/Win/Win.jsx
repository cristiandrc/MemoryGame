import Button from "../Button/Button";
import "./win.scss";

const Win = ({ time, movements, onClick }) => {
  return (
    <div className="win">
      <h2 className="win-title">Congratulations</h2>
      <h4 className="win-subTitle">Completed Game</h4>
      <span className="win-movements">Movements: {movements}</span>
      <Button onClick={onClick} />
    </div>
  );
};

export default Win;
