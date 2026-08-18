import { useState } from 'react'
import './App.css'
import Open from './components/Open'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutMe/>
    </>
  )
}

export default App
