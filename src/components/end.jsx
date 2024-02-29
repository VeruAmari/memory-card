/* eslint-disable react/prop-types */

import { Success } from './success';
import { Sad } from './sad';

function End({
  setSuccess,
  success,
  setPlaying,
  setPicking,
  setStashesEmptied,
}) {
  function restart() {
    setSuccess(null);
    setPlaying(true);
    setPicking(false);
    setStashesEmptied(0);
  }
  function mainMenu() {
    setSuccess(null);
    setPlaying(false);
    setPicking(true);
    setStashesEmptied(0);
  }

  return (
    (success && <Success mainMenu={mainMenu} restart={restart}></Success>) || (
      <Sad mainMenu={mainMenu} restart={restart}></Sad>
    )
  );
}

export { End };
