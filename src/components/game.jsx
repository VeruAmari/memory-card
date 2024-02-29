/* eslint-disable react/prop-types */
import { useEffect } from 'react';

function Game({
  stashes,
  setStashesEmptied,
  stashesEmptied,
  setSuccess,
  setPlaying,
}) {
  let cards = [];

  useEffect(() => {
    function handleStashesEmptied() {
      setStashesEmptied(stashesEmptied + 1);
      /*
      if (stashesEmptied >= stashes) {
        console.log(stashes === stashesEmptied);
        setSuccess(true);
        setPlaying(false);
      }*/
    }

    for (let i = 0; i < stashes; i += 1) {
      document
        .getElementById(`card-${i}`)
        .addEventListener('click', handleStashesEmptied);
    }
  }, [stashesEmptied, setStashesEmptied, setPlaying, setSuccess, stashes]);

  useEffect(() => {
    if (stashesEmptied >= stashes) {
      console.log(stashes === stashesEmptied);
      setSuccess(true);
      setPlaying(false);
    }
  }, [stashesEmptied, stashes, setPlaying, setSuccess]);
  // function handle() {}

  for (let i = 0; i < stashes; i += 1) {
    const cardId = `card-${i}`;
    cards.push(
      <button id={cardId} key={i}>
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
