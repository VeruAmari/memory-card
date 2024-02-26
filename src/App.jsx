import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Where did I hide the acorns?!</h1>
        <h2
          onClick={() => {
            setCount((curr) => curr + 1);
          }}
        >
          Acorn count: {count}
        </h2>
      </div>
    </>
  );
}

export default App;
