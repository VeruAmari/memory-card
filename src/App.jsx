import { useState, useEffect } from 'react';
import { Game } from './components/game';
import { StartEnd } from './components/startOrEnd';
import { Credit } from './components/credit';
// import data from './images.json';
import './styles/normalize.css';
import './styles/App.css';

function App() {
  const [status, setStatus] = useState('picking');
  // App status can be picking, playing, success or sad
  const [stashes, setStashes] = useState(3);
  const [stashesEmptied, setStashesEmptied] = useState(0);
  const [maxStashesEmptied, setMaxStashesEmptied] = useState(0);

  const [imageData, setImageData] = useState('');

  // API/localstorage data retriever
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

  return (
    <>
      <div className="header colorize-bg">
        <h1 className="title">Acorn Stashes</h1>
        <div className="score">
          <div className="highest-score">Max Found: {maxStashesEmptied}</div>
          <div className="current-score">Stashes Found: {stashesEmptied}</div>
        </div>
      </div>
      {(status === 'playing' && (
        <Game
          setStatus={setStatus}
          stashes={stashes}
          status={status}
          setStashesEmptied={setStashesEmptied}
          setMaxStashesEmptied={setMaxStashesEmptied}
          stashesEmptied={stashesEmptied}
          imageData={imageData}
        ></Game>
      )) || (
        <>
          <div className="app colorize-bg2">
            <StartEnd
              setStatus={setStatus}
              status={status}
              setStashesEmptied={setStashesEmptied}
              stashes={stashes}
              setStashes={setStashes}
            ></StartEnd>
          </div>
          <Credit imageData={imageData}></Credit>
        </>
      )}
    </>
  );
}

export default App;
