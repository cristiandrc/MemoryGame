import Button from "../Button/Button";
import "./win.scss";

const Win = ({ time, movements, onClick }) => {
  return (
    <div className="win">
      <h2 className="win-title">Congratulations</h2>
      <h4 className="win-subTitle">Completed Game</h4>
      <span className="win-movements">Movements: {movements}</span>
      <span className="win-time">
        Time:
        {time.minutes > 9 ? ` ${time.minutes}` : ` 0${time.minutes}`}:
        {time.seconds > 9 ? time.seconds : `0${time.seconds}`}
      </span>
      <Button onClick={onClick} />
    </div>
  );
};

export default Win;
