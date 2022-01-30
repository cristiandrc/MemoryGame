import "./menu.scss";

const Menu = ({ movements, startGame }) => {
  return (
    <div className="menu">
      <span>Movimientos {movements}</span>
      <button className="menu-button" onClick={startGame}>
        Play again
      </button>
    </div>
  );
};

export default Menu;
