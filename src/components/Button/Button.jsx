import "./button.scss";
const Button = ({ onClick, text = "Play again" }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
