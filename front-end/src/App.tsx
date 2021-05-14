import React from 'react'
import HeaderBar from './components/Headerbar/headerbar'
import PhotoHeader from './components/photoHead'
import PersonalBio from './components/bio'
import Projects from './components/Projects/projects'
import ContactForm from './components/contact'
import { ProjectsArray } from './components/Projects/projectsArray'
import './styles/App.css'

function App () {
  return (
    <div>
      <HeaderBar id="top"/>
      <div className="App">
        <header className="App-header">
          <PhotoHeader>
            <h1 style={{ color: '#ffc857ff', textShadow: '-1px 0 #14080eff, 0 1px black, 1px 0 #14080eff, 0 -1px black' }}>Paul Dill</h1>
            <h2 style={{ color: '#14080eff', textShadow: '-1px 0 #ffc857ff, 0 1px white, 1px 0 #ffc857ff, 0 -1px white' }}>Junior Full Stack Developer</h2>
          </PhotoHeader>
        </header>
        <body>
          <PersonalBio/>
          <Projects projectArray={ProjectsArray}/>
          <ContactForm />
        </body>
      </div>
    </div>
  )
}

export default App
