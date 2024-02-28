import { useState } from 'react';
import { Game } from './components/game';
import { StartEnd } from './components/startOrEnd';
import './styles/App.css';

function App() {
  const [playing, setPlaying] = useState(false);
  const [stashes, setStashes] = useState(3);
  const [stashesEmptied, setStashesEmptied] = useState(0);
  const [success, setSuccess] = useState(null);
  const [picking, setPicking] = useState(true);

  return (
    <>
      {(playing && (
        <Game
          stashes={stashes}
          setPlaying={setPlaying}
          setStashesEmptied={setStashesEmptied}
          stashesEmptied={stashesEmptied}
          setSuccess={setSuccess}
        ></Game>
      )) || (
        <StartEnd
          setStashesEmptied={setStashesEmptied}
          setPlaying={setPlaying}
          stashes={stashes}
          setStashes={setStashes}
          success={success}
          setSuccess={setSuccess}
          picking={picking}
          setPicking={setPicking}
        ></StartEnd>
      )}
    </>
  );
}

export default App;
