import { useState, useEffect } from 'react';
import { Game } from './components/game';
import { StartEnd } from './components/startOrEnd';
// import data from './images.json';
import './styles/normalize.css';
import './styles/App.css';

function App() {
  const [playing, setPlaying] = useState(false);
  const [stashes, setStashes] = useState(3);
  const [stashesEmptied, setStashesEmptied] = useState(0);
  const [maxStashesEmptied, setMaxStashesEmptied] = useState(0);
  const [success, setSuccess] = useState(null);
  const [picking, setPicking] = useState(true);

  const [imageData, setImageData] = useState('');

  // API call toggle

  useEffect(() => {
    let ignore = false;
    const items = JSON.parse(localStorage.getItem('items'));
    if (!items) {
      fetch('https://api.pexels.com/v1/search?query=forest', {
        headers: {
          Authorization:
            'nSA6af1OexPWH12Pso9EnmhgoBh3TPLAGvi6LYhoVghW5bc6pifHIJdK',
        },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((result) => {
          if (!ignore) {
            localStorage.setItem('items', JSON.stringify(result));
            setImageData(result);
            console.log(
              'No data found in local storage, fetching data from API.',
            );
          }
        });
    } else {
      if (!ignore) {
        console.log('Found items in local storage, avoiding API call.');
        setImageData(items);
      }
    }

    return () => {
      ignore = true;
    };
  }, []);

  // Mock API call

  return (
    <>
      <div className="header">
        <h1 className="title">Acorn Stashes</h1>
        <div className="score">
          <div className="highest-score">Max Found: {maxStashesEmptied}</div>
          <div className="current-score">Stashes Found: {stashesEmptied}</div>
        </div>
      </div>
      {(playing && (
        <Game
          stashes={stashes}
          setPlaying={setPlaying}
          setStashesEmptied={setStashesEmptied}
          setMaxStashesEmptied={setMaxStashesEmptied}
          stashesEmptied={stashesEmptied}
          setSuccess={setSuccess}
          imageData={imageData}
        ></Game>
      )) || (
        <div className="app">
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
        </div>
      )}
    </>
  );
}

export default App;
