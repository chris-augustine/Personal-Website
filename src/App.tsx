import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Chris Augustine Portfolio</h1>
      <h3>Based in San Ramon, California</h3>
      <div>
        <a href="https://www.linkedin.com/in/chris--augustine/" target="_blank">
          <img src="Profile_Picture_Yearbook.jpg" className="logo" alt="Photo of Chris Augustine" />
        </a>
        <a href="https://scholarcommons.scu.edu/cseng_senior/284/" target="_blank">
          <img src="Senior_Design_2024.jpg" className="logo" alt="Senior Design Presentation 2024" />
        </a>
        <h2>General Purpose Tuning Data Visualization Showcase</h2>
        <video width="1280" height="720" controls>
          <source src="DataVisualizationAppDemo.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <h2>iOS Application for Localized Recipe Suggestions Showcase</h2>
        <video width="1280" height="720" controls>
          <source src="iOSAppDemoInitial.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <h2>Solving Human Intelligence Tests using Artificial Intelligence Techniques: Formal Report</h2>
        <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:dac1a5d5-7b60-4092-bdaf-2499da34005d" target="_blank">
          <img src="RPMProjectWebsite.png" className="logo" alt="Formal Report about Solving Human Intelligence Tests using AI" />
        </a>


      </div>
    </div>
  )
}

export default App
