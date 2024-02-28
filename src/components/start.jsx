/* eslint-disable react/prop-types */
function Start({ stashes, setPicking, setStashes, setPlaying }) {
  function onChange(e) {
    setStashes(Number(e.target.value));
  }
  function handleLeft() {
    setStashes((curr) => curr - 1);
  }
  function handleRight() {
    setStashes((curr) => curr + 1);
  }
  return (
    <>
      <div>
        <h1>Start</h1>
        <button
          onClick={() => {
            if (stashes > 0) {
              setPlaying(true);
              setPicking(false);
            }
          }}
        >
          Start
        </button>
      </div>
      <label htmlFor="stashes">Stashes Remembered</label>
      <div>
        <button onClick={handleLeft}>Left</button>
        <input
          onChange={onChange}
          type="tel"
          name="stashes"
          id="stashes"
          value={stashes}
        />
        <button onClick={handleRight}>Right</button>
      </div>
    </>
  );
}

export { Start };
