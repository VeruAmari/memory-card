/* eslint-disable react/prop-types */
function Sad({ restart }) {
  return (
    <>
      <h1>{":'("}</h1>
      <button onClick={restart}>Restart</button>
    </>
  );
}

export { Sad };
