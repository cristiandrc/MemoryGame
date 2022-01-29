const Win = ({ time, movements, onClick }) => {
  return (
    <div>
      <p>completed game</p>
      <span>movements {movements}</span>
      <button onClick={onClick}>Play again</button>
    </div>
  );
};

export default Win;
