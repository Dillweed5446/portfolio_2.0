import React from 'react'
import HeaderBar from './headerbar'
import PhotoHeader from './photoHead'
import PersonalBio from './bio'
import Projects from './projects'
import ContactForm from './contact'
import './styles/App.css'

function App () {
  return (
    <div className="App">
      <HeaderBar />
      <header className="App-header">
        <PhotoHeader>
          <h1 style={{ color: 'yellow', textShadow: '-1px 0 green, 0 1px black, 1px 0 green, 0 -1px black' }}>Paul Dill</h1>
          <h2 style={{ color: 'green', textShadow: '-1px 0 yellow, 0 1px white, 1px 0 yellow, 0 -1px white' }}>Junior Full Stack Developer</h2>
        </PhotoHeader>
      </header>
      <body>
        <PersonalBio />
        <Projects />
        <ContactForm />
      </body>
    </div>
  )
}

export default App
