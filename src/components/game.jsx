/* eslint-disable react/prop-types */
function Game({
  stashes,
  setStashesEmptied,
  stashesEmptied,
  setSuccess,
  setPlaying,
}) {
  let cards = [];

  function handle() {
    setStashesEmptied((current) => current + 1);

    if (stashesEmptied >= stashes) {
      console.log(stashes === stashesEmptied);
      setSuccess(true);
      setPlaying(false);
    }
  }

  for (let i = 0; i < stashes; i += 1) {
    const cardId = `card-${i}`;
    cards.push(
      <button onClick={handle} id={cardId} key={i}>
        Game
      </button>,
    );
  }
  return (
    <>
      <h1>Found Spots: {stashesEmptied}</h1>
      <div>{cards}</div>
    </>
  );
}

export { Game };
