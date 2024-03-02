import { useState, useEffect } from 'react';
import { Game } from './components/game';
import { StartEnd } from './components/startOrEnd';
import data from './images.json';
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
  const callAPI = false;

  useEffect(() => {
    let ignore = false;
    if (callAPI) {
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
            setImageData(result);
            console.log('API called, fetching data from API.');
          }
        });
    }
    return () => {
      ignore = true;
    };
  }, [callAPI]);

  // Mock API call

  useEffect(() => {
    let ignore = false;
    if (!callAPI) {
      if (!ignore) {
        setImageData(data);
        console.log('API not called, fetching data from mock.');
      }
    }
    return () => {
      ignore = true;
    };
  }, [callAPI]);

  return (
    <>
      <div className="header">
        Header{' '}
        <div className="score">
          <div className="highest score">
            Max Stashes Found: {maxStashesEmptied}
          </div>
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
