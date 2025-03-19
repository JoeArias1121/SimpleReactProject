import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card count={count} />
      <h1>Spam the button</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Spam me {count}
      </button>
    </>
  )
}

export default App
