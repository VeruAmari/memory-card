/* eslint-disable react/prop-types */
function Sad({ mainMenu, restart }) {
  return (
    <>
      <h1>{":'("}</h1>
      <button onClick={restart}>Play Again</button>
      <button onClick={mainMenu}>Main Menu</button>
    </>
  );
}

export { Sad };
