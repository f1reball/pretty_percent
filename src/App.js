import { useState } from 'react';
import './App.css';

import InputSet from './components/inputSet';

function App() {

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  return (
    <div className="App">
      <InputSet update={setStart} value={start} name="Buy"/>
      <InputSet update={setEnd} value={end} name="Sell" />

      <h1>{start}</h1>
      <h1>{end}</h1>
      <h1>{(end-start)/start * 100}%</h1>
    </div>
  );
}

export default App;
