/* eslint-disable react/prop-types */
function Success({ mainMenu, restart }) {
  return (
    <>
      <h1>Yay!</h1>
      <button onClick={restart}>Play Again</button>
      <button onClick={mainMenu}>Main Menu</button>
    </>
  );
}

export { Success };
