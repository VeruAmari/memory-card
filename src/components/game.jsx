/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function Game({
  setStatus,
  stashes,
  setStashesEmptied,
  setMaxStashesEmptied,
  stashesEmptied,
  imageData,
}) {
  let cards = [];

  const [uniqueIDs, setUniqueIDs] = useState({});
  const [sad, setSad] = useState(false);

  const [randomizedOrder, setRandomizedOrder] = useState('');
  const [toBeRandomized, setToBeRandomized] = useState(false);

  // Randomize function
  function randomize() {
    console.log('Running randomize.');
    let next = [];
    while (next.length < stashes) {
      const chosenRandomNumber = Math.floor(Math.random() * 30) % stashes;
      const newNum = chosenRandomNumber;
      if (!next.includes(newNum)) {
        next.push(newNum);
      }
    }
    const num = {};
    for (let i = 0; i < stashes; i++) {
      num[`${i}`] = next.pop();
    }

    setRandomizedOrder({ ...num });
  }

  // Callback function, click handler
  function handleClick(e) {
    const pic = e.target.style['background-image'];
    const newID = uniqueIDs[pic] ? uniqueIDs[pic] + 1 : 1;
    setUniqueIDs({ ...uniqueIDs, [pic]: newID });
    if (newID > 1) {
      setSad(true);
    } else {
      setStashesEmptied((current) => current + 1);
      setMaxStashesEmptied((current) =>
        current <= stashesEmptied ? current + 1 : current,
      );
    }
    // Triggers randomizing on-click
    setToBeRandomized(false);
  }
  // Randomize cards order
  if (!toBeRandomized) {
    randomize();
    setToBeRandomized(true);
  }
  // Creates all card elements
  if (stashes) {
    for (let i = 0; i < stashes; i += 1) {
      console.log('Creating Cards.');
      const index = randomizedOrder[i];
      const image = imageData.photos[index] || imageData.photos[i];
      const cardId = `card-${i}`;
      const divStyle = {
        backgroundImage: `url(${image.src.medium})`,
      };
      cards.push(
        <div key={'card-' + i} className="card">
          <div className="hidden stash hover-effects"></div>
          <div
            className="hidden stash"
            onMouseUp={handleClick}
            id={cardId}
            style={divStyle}
          ></div>
        </div>,
      );
    }
  }

  // Handles checking for sad or success //
  useEffect(() => {
    if (sad) {
      setStatus('sad');
    } else if (stashesEmptied >= stashes) {
      setStatus('success');
    }
  }, [sad, setStatus, stashes, stashesEmptied]);

  return (
    <>
      <div className="cards container colorize-bg2">{cards}</div>
    </>
  );
}

export { Game };
