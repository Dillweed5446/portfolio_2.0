import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { GoBrowser } from 'react-icons/go'
import { SectionTitle } from '../../styles/globalStyledComponents'
import StyledIcons from './styledIcon'
import '../../styles/projects.css'

interface Props {
    className?: string,
    style?: object,
    projectArray: Array<any>
}

const CardTitle = styled.h3`
color: #14080eff;
text-align: center;
`

const CardImage = styled.img`
width: 80%;
height: 10rem;
background-color: green;
margin-left: 10%;
margin-right: 10%;
`

const CardButton = styled.button`
color: #ffc857ff;
border-bottom: 2px solid #4ea5d9ff;
text-shadow: -1px 0 #14080eff, 0 1px black, 1px 0 #14080eff, 0 -1px black;
padding: 2rem;
margin: 0 .5rem;
background: #8acb88ff;
font-size: 2rem;
font-weight: 800;
border-radius: .7rem;
`

export default function Projects ({ className, style, projectArray }: Props) {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#4ea5d9ff' }} id='projects'>
      <header>
          <SectionTitle color='#ffc857ff'>Projects</SectionTitle>
        </header >
      <body>
        <div className="grid-container">
        {projectArray.map((item:any, index:number) => {
          return (
          <div className="card" key={`card-${index + 1}`}>
            <CardTitle>{item.title}</CardTitle>
            <CardImage src={item.image}/>
            <StyledIcons iconArray={item.icons}/>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href={item.demoHref}><CardButton><GoBrowser/>  Demo</CardButton></a>
            <a href={item.codeHref}><CardButton><FaGithub/>  Code</CardButton></a>
            </div>
          </div>
          )
        })}
        </div>
      </body>
    </div >
  )
}
