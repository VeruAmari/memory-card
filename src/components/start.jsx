/* eslint-disable react/prop-types */
import hungry from '../assets/hungry-squirrel.png';
import hungryPortrait from '../assets/hungry-squirrel-portrait.png';
function Start({ setStatus, stashes, setStashes }) {
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
        <div className="hero">
          <picture>
            <source srcSet={hungryPortrait} media="(max-width: 600px)" />
            <img src={hungry} alt="" />
          </picture>
          <p className="hero-text">
            This hungry squirrel recalls some of her hidden food stashes in the
            forest. Can you help her find her acorns so that she doesn&apos;t
            visit the same stash twice?
          </p>
        </div>
        <button
          onClick={() => {
            if (stashes > 0) {
              setStatus('playing');
            }
          }}
        >
          Start
        </button>
      </div>
      <label htmlFor="stashes">Stashes Remembered</label>
      <div>
        <button onClick={handleLeft}>Less</button>
        <input
          onChange={onChange}
          type="tel"
          name="stashes"
          id="stashes"
          value={stashes}
        />
        <button onClick={handleRight}>More</button>
      </div>
    </>
  );
}

export { Start };
