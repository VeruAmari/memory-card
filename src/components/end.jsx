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
    setPlaying(false);
    setPicking(true);
    setStashesEmptied(0);
  }

  return (
    (success && <Success restart={restart}></Success>) || (
      <Sad restart={restart}></Sad>
    )
  );
}

export { End };
