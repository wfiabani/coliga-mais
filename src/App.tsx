import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MainMenu from './components/MainMenu/MainMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainMenu />
    </>
  )
}

export default App
