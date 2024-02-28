/* eslint-disable react/prop-types */
import { Start } from './start';
import { End } from './end';

/*
playToggle={togglePlay}
stashes={stashes}
onStashChange={onStashesChange}
success={success}
picking={picking}
togglePicking={togglePicking}
*/

function StartEnd({
  stashes,
  picking,
  setPicking,
  success,
  setSuccess,
  setStashes,
  setPlaying,
  setStashesEmptied,
}) {
  return (
    (picking && (
      <Start
        stashes={stashes}
        setPicking={setPicking}
        setStashes={setStashes}
        setPlaying={setPlaying}
        setStashesEmptied={setStashesEmptied}
      ></Start>
    )) || (
      <End
        setPicking={setPicking}
        setSuccess={setSuccess}
        success={success}
        setPlaying={setPlaying}
        setStashesEmptied={setStashesEmptied}
      ></End>
    )
  );
}

export { StartEnd };
