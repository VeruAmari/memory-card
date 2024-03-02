/* eslint-disable react/prop-types */
function Start({ stashes, setPicking, setStashes, setPlaying }) {
  function onChange(e) {
    let num = Number(e.target.value);
    if (num > 0 && num < 16) {
      setStashes(num);
    }
  }
  function handleLeft() {
    setStashes((curr) => (curr > 1 ? curr - 1 : curr));
  }
  function handleRight() {
    setStashes((curr) => (curr < 15 ? curr + 1 : curr));
  }
  return (
    <>
      <div>
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
