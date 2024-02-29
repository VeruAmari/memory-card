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
        <h1 className="title">My Hidden Acorn Stashes</h1>
        <p className="description">
          This hungry squirrel recalls some of her hidden food stashes in the
          forest. Can you help her find her acorns so that she doesn&apos;t
          visit the same stash twice?
        </p>
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
