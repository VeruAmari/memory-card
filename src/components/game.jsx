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
  // const cards = [];
  const [cards, setCards] = useState('');
  const [uniqueIDs, setUniqueIDs] = useState({});

  const [randomizedOrder, setRandomizedOrder] = useState('');
  const [toBeRandomized, setToBeRandomized] = useState(true);

  useEffect(() => {
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

    // Randomize cards order
    if (toBeRandomized) {
      randomize();
      setToBeRandomized(false);
    }

    function handleClick(e) {
      const pic = e.target.style['background-image'];
      const newID = uniqueIDs[pic] ? uniqueIDs[pic] + 1 : 1;
      setUniqueIDs({ ...uniqueIDs, [pic]: newID });
      if (newID > 1) {
        setStatus('sad');
      } else {
        setStashesEmptied((current) => current + 1);
        setMaxStashesEmptied((current) =>
          current <= stashesEmptied ? current + 1 : current,
        );
      }
      // Triggers randomizing on-click
      setToBeRandomized(true);
    }

    // Creates all card elements
    const setupCardsArray = [];
    for (let i = 0; i < stashes; i += 1) {
      console.log('Creating Cards.');
      const index = randomizedOrder[i];
      const image = imageData.photos[index] || imageData.photos[i];
      const cardId = `card-${i}`;
      const divStyle = {
        backgroundImage: `url(${image.src.medium})`,
      };
      setupCardsArray.push(
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
    setCards(setupCardsArray);
  }, [
    imageData.photos,
    randomizedOrder,
    stashes,
    setMaxStashesEmptied,
    setStashesEmptied,
    setStatus,
    stashesEmptied,
    uniqueIDs,
    toBeRandomized,
  ]);
  useEffect(() => {
    if (stashesEmptied >= stashes) {
      setStatus('success');
    }
  });
  return <div className="cards container colorize-bg2">{cards}</div>;
}

export { Game };
