import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Deck from './Deck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='all-content'>
        <h1>Korean Essentials For College</h1>
        <h2>Test your Korean language skills before the study abroad at Yonsei!</h2>
        <h4>Total Cards: 10</h4>
        <Deck />
      </div>
      
    </>
  )
}

export default App
