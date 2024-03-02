/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function Game({
  stashes,
  setStashesEmptied,
  setMaxStashesEmptied,
  stashesEmptied,
  setSuccess,
  setPlaying,
  imageData,
}) {
  let cards = [];

  const [uniqueIDs, setUniqueIDs] = useState({});
  const [sad, setSad] = useState(false);

  const [randomized, setRandomized] = useState('');
  const [isRandomized, setIsRandomized] = useState(false);

  // Callback function, click handler
  function handleStashesEmptied(e) {
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
    setIsRandomized(false);
  }

  // Randomize cards order
  useEffect(() => {
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

      setRandomized({ ...num });
    }

    if (!isRandomized) {
      randomize();
    }
    return () => {
      setIsRandomized(true);
    };
  }, [setIsRandomized, isRandomized, stashes]);

  // Creates all card elements
  for (let i = 0; i < stashes; i += 1) {
    console.log('Creating Cards.');
    const index = randomized[i];
    const image = imageData.photos[index] || imageData.photos[i];
    const cardId = `card-${i}`;
    const divStyle = {
      backgroundImage: `url(${image.src.medium || image.src.medium})`,
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
      <div className="cards container">{cards}</div>
    </>
  );
}

export { Game };
