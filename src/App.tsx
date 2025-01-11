import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.linkedin.com/in/chris--augustine/" target="_blank">
          <img src="Profile_Picture_Yearbook.jpg" className="logo" alt="Photo of Chris Augustine" />
        </a>
      </div>
      <h1>Chris Augustine Personal Website</h1>
    </div>
  )
}

export default App
