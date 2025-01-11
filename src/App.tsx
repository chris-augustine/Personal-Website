import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Chris Augustine Portfolio</h1>
      <div>
        <a href="https://www.linkedin.com/in/chris--augustine/" target="_blank">
          <img src="Profile_Picture_Yearbook.jpg" className="logo" alt="Photo of Chris Augustine" />
        </a>
        <a href="https://scholarcommons.scu.edu/cseng_senior/284/" target="_blank">
          <img src="Senior_Design_2024.jpg" className="logo" alt="Senior Design Presentation 2024" />
        </a>
        <h2>General Purpose Tuning Data Visualization Demo</h2>
        <video width="1280" height="720" controls>
          <source src="DataVisualizationAppDemo.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  )
}

export default App
