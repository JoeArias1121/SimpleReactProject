import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [countReps, setCountReps] = useState(0)
  const [countSets, setCountSets] = useState(0)

  return (
    <>
      <Card reps={countReps} sets={countSets} />
      <p>Reps:</p>
      <input
        type="number"
        placeholder="0"
        onChange={(e) => setCountReps(Number(e.target.value))}
      />
      <br />
      <p>Sets:</p>
      <input
        type="number"
        placeholder="0"
        onChange={(e) => setCountSets(Number(e.target.value))}
      />
    </>
  );
}



export default App
