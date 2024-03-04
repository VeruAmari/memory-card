/* eslint-disable react/prop-types */

import { Success } from './success';
import { Sad } from './sad';

function End({ status, setStatus, setStashesEmptied }) {
  function restart() {
    setStatus('playing');
    setStashesEmptied(0);
  }
  function mainMenu() {
    setStatus('picking');
    setStashesEmptied(0);
  }

  return (
    <>
      {(status === 'success' && <Success />) || <Sad />}
      <button onClick={restart}>Play Again</button>
      <button onClick={mainMenu}>Main Menu</button>
    </>
  );
}

export { End };
