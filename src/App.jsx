import { useState, useEffect } from 'react';
import { Game } from './components/game';
import { StartEnd } from './components/startOrEnd';
import './styles/App.css';

function App() {
  const [playing, setPlaying] = useState(false);
  const [stashes, setStashes] = useState(3);
  const [stashesEmptied, setStashesEmptied] = useState(0);
  const [success, setSuccess] = useState(null);
  const [picking, setPicking] = useState(true);

  const [imageData, setImageData] = useState('');

  /*
  TODO: Integrate pexels API for images in cards
  fetch("https://api.pexels.com/v1/search?query=forest",{
  headers: {
    Authorization: "YOUR_API_KEY"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     console.log(data)
   })
*/

  useEffect(() => {
    let ignore = false;
    fetch().then((result) => {
      if (!ignore) {
        setImageData(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {(playing && (
        <Game
          stashes={stashes}
          setPlaying={setPlaying}
          setStashesEmptied={setStashesEmptied}
          stashesEmptied={stashesEmptied}
          setSuccess={setSuccess}
          imageData={imageData}
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
