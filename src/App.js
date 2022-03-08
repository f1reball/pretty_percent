import { useState } from 'react';
import './App.css';

import InputSet from './components/input';

function App() {

  const [start, setStart] = useState(0);


  return (
    <div className="App">
      <InputSet update={setStart} start={start}/>
      <h1>{start}</h1>
    </div>
  );
}

export default App;
