/* eslint-disable react/prop-types */
// import {useState, useEffect} from 'react';

function Cards({ cards, handleClick }) {
  // Creates all card elements
  const madeCards = cards.map((card) => {
    const divStyle = {
      backgroundImage: card.bg,
    };

    return (
      <div key={card.id} className="card">
        <div className="hidden stash hover-effects"></div>
        <div
          className="hidden stash"
          onMouseUp={handleClick}
          id={card.id}
          style={divStyle}
        ></div>
      </div>
    );
  });

  return <>{madeCards};</>;
}

export { Cards };
