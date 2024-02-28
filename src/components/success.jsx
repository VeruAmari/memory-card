/* eslint-disable react/prop-types */
function Success({ restart }) {
  return (
    <>
      <h1>Yay!</h1>
      <button onClick={restart}>Restart</button>
    </>
  );
}

export { Success };
