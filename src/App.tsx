import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [countReps, setCountReps] = useState(0)
  const [countSets, setCountSets] = useState(0)

  return (
    <>
      <Card reps={countReps} sets={countSets} />
      <h1>Spam the button</h1>
      <button onClick={() => setCountReps((countReps) => countReps + 1)}>
        Reps = {countReps}
      </button>
      <br />
      <button onClick={() => setCountSets((countSets) => countSets + 1)}>
        Sets = {countSets}
      </button>
    </>
  )
}



export default App
