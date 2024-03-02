/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function Game({
  stashes,
  setStashesEmptied,
  stashesEmptied,
  setSuccess,
  setPlaying,
  imageData,
}) {
  let cards = [];

  const [uniqueIDs, setUniqueIDs] = useState({});
  const [sad, setSad] = useState(false);

  // TODO: Randomize cards order.

  const [randomized, setRandomized] = useState('');

  /**
   * I need to create a function that randomizes
   * the order of backgrounds in a list.
   *
   */

  function randomize() {
    console.log('Running randomize.');
    let next = [];
    while (next.length < stashes) {
      const chosenRandomNumber = Math.floor(Math.random() * 30) % stashes;
      console.log('Chosen Random Number: ', chosenRandomNumber);
      const newNum = chosenRandomNumber;
      if (!next.includes(newNum)) {
        next.push(newNum);
      }
    }
    const num = {};
    for (let i = 0; i < stashes; i++) {
      num[`${i}`] = next.pop();
    }

    setRandomized({ ...num });
  }

  // Callback function, click handler
  function handleStashesEmptied(e) {
    const pic = e.target.style['background-image'];
    const newID = uniqueIDs[pic] ? uniqueIDs[pic] + 1 : 1;
    setUniqueIDs({ ...uniqueIDs, [pic]: newID });
    if (newID > 1) {
      setSad(true);
    } else {
      setStashesEmptied(stashesEmptied + 1);
    }
    randomize();
  }

  useEffect(() => {
    let isRandom = false;
    if (!isRandom) {
      randomize();
    }
    return () => {
      isRandom = true;
    };
  }, []);

  // Creates all card elements

  // TODO: Randomized returns undefined when reaching  this function
  for (let i = 0; i < stashes; i += 1) {
    console.log('Randomized, index', i, ': ', randomized[i]);
    const index = randomized[i];
    console.log(imageData.photos[index]);
    const cardId = `card-${i}`;
    const divStyle = {
      // TODO: Must replace i with index once its fixed
      backgroundImage: `url(${imageData.photos[i].src.medium})`,
    };
    cards.push(
      <div
        className="hidden stash"
        onMouseUp={handleStashesEmptied}
        id={cardId}
        key={i}
        style={divStyle}
      ></div>,
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
      <h1>Stashes Visited: {stashesEmptied}</h1>
      <div className="cards container">{cards}</div>
    </>
  );
}

export { Game };
