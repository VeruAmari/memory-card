/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Cards } from './cards';
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

  const [toBeRandomized, setToBeRandomized] = useState(true);

  // Card data maker
  function makeCardsData({ randomizedOrder }) {
    console.log('Card Data before loop.');
    const data = [];
    for (let i = 0; i < stashes; i++) {
      console.log('Cards data inside loop', i);
      const index = randomizedOrder[i];

      data.push({
        id: `card-${i}`,
        bg: `url(${imageData.photos[index].src.medium})`,
      });
    }
    setCards(data);
  }

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
    const randomizedOrder = {};
    for (let i = 0; i < stashes; i++) {
      randomizedOrder[`${i}`] = next.pop();
    }

    makeCardsData({ randomizedOrder });
  }

  // Randomize cards order
  if (toBeRandomized) {
    randomize();
    setToBeRandomized(false);
  }

  // Callback function, click handler
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

  useEffect(() => {
    if (stashesEmptied >= stashes) {
      setStatus('success');
    }
  });

  return (
    <div className="cards container colorize-bg2">
      <Cards cards={cards} handleClick={handleClick} />
    </div>
  );
}

export { Game };
