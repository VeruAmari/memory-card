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
  status,
  setStatus,
  stashes,
  setStashes,
  setStashesEmptied,
}) {
  return (
    (status === 'picking' && (
      <Start
        stashes={stashes}
        setStatus={setStatus}
        setStashes={setStashes}
        setStashesEmptied={setStashesEmptied}
      ></Start>
    )) || (
      <End
        setStatus={setStatus}
        status={status}
        setStashesEmptied={setStashesEmptied}
      ></End>
    )
  );
}

export { StartEnd };
