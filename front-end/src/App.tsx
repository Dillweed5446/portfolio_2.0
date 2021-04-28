import React from 'react'
import PD from './PD_Profile_Pic.resized.jpg'
import HeaderBar from './headerbar'
import './App.css'

function App () {
  return (
    <div className="App">
      <HeaderBar />
      <header className="App-header">

      </header>
      <body>
      <img src={PD} className="Profile_Pic" alt="PD" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  )
}

export default App
