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
        <PhotoHeader className="section"/>
      </header>
      <body>
        <PersonalBio className="section"/>
        <Projects className="section"/>
        <ContactForm className="section"/>
      </body>
    </div>
  )
}

export default App
