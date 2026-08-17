import { useState } from 'react'
import './App.css'
import Open from './components/Open'
import Home from './components/Home'
import About_Me from './components/About_Me'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <About_Me/>
    </>
  )
}

export default App
