/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function Game({
  stashes,
  setStashesEmptied,
  stashesEmptied,
  setSuccess,
  setPlaying,
}) {
  let cards = [];

  const [uniqueIDs, setUniqueIDs] = useState({});
  const [sad, setSad] = useState(false);

  // Callback function, click handler
  function handleStashesEmptied(e) {
    const newID = uniqueIDs[e.target.id] ? uniqueIDs[e.target.id] + 1 : 1;
    setUniqueIDs({ ...uniqueIDs, [e.target.id]: newID });
    if (newID > 1) {
      setSad(true);
    } else {
      setStashesEmptied(stashesEmptied + 1);
    }
  }

  // Creates all card elements
  for (let i = 0; i < stashes; i += 1) {
    const cardId = `card-${i}`;
    cards.push(
      <button onClick={handleStashesEmptied} id={cardId} key={i}>
        Card
      </button>,
    );
  }

  // Handles checking for sad or success //
  useEffect(() => {
    if (sad) {
      setSuccess(false);
      setPlaying(false);
    } else if (stashesEmptied >= stashes && !sad) {
      setSuccess(true);
      setPlaying(false);
    }
  }, [sad, setPlaying, stashes, setSuccess, stashesEmptied]);

  return (
    <>
      <h1>Found Spots: {stashesEmptied}</h1>
      <div>{cards}</div>
    </>
  );
}

export { Game };
