import React from 'react'
import styled from 'styled-components'
import { FaCode } from 'react-icons/fa'
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

const CardImage = styled.div`
width: 80%;
height: 10rem;
background-color: green;
margin: auto;
`

const CardIcons = styled.div`
width: 90%;
height: 3rem;
background-color: transparent;
margin: auto;
margin-top: .5rem;
font-size: 2.5rem;
`
const CardButton = styled.button`
color: #ffc857ff;
border-bottom: 2px solid #4ea5d9ff;
padding: 2rem;
margin: .5rem;
background: #8acb88ff;
font-size: 2rem;
font-weight: 800;
border-radius: .7rem;
`

export default function Projects ({ className, style, projectArray }: Props) {
  // Create map function with array for projects so that I can add github link and auto populate the cards.
  // May try borrowing namedIcons module from Attila Goz to simplify this section

  /* <Card style={{ gridRow: 'title-end', gridColumn: 'line2' }}>
        <CardTitle>this.portfolio</CardTitle>
        <CardImage>Insert Image Here.</CardImage>
        <CardIcons><FaReact/></CardIcons>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="/#top" ><CardButton><GoBrowser/>  Demo</CardButton></a>
          <a href="https://github.com/Dillweed5446/portfolio_2.0"><CardButton><FaCode/>  Code</CardButton></a>
        </div>
      </Card>
      <Card style={{ gridRow: 'title-end', gridColumn: 'line3' }}>
        <CardTitle>Hui Wa&apos;a Weather</CardTitle>
        <CardImage>Insert Image Here.</CardImage>
        <CardIcons><FaReact/></CardIcons>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="https://pdill.dev/paddleWrapper" ><CardButton><GoBrowser/>  Demo</CardButton></a>
          <a href="https://github.com/Dillweed5446/pdill.dev/tree/master/pdill.dev/components/Paddler_App" ><CardButton><FaCode/>  Code</CardButton></a>
        </div>
      </Card>
      <Card style={{ gridRow: 'first-card-end', gridColumn: 'line2' }}>
        <CardTitle>Library CRUD</CardTitle>
        <CardImage>Insert Image Here.</CardImage>
        <CardIcons><FaReact/></CardIcons>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="" ><CardButton><GoBrowser/>  Demo</CardButton></a>
          <a href="https://github.com/Dillweed5446/library_crud" ><CardButton><FaCode/>  Code</CardButton></a>
        </div>
      </Card>
      <Card style={{ gridRow: 'first-card-end', gridColumn: 'line3' }}>
        <CardTitle>MotherCupboard</CardTitle>
        <CardImage>Insert Image Here.</CardImage>
        <CardIcons><FaReact/></CardIcons>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="https://mothercupboard.com" ><CardButton><GoBrowser/>  Demo</CardButton></a>
          <a href="https://github.com/aptlyundecided/mc-frontend" ><CardButton><FaCode/>  Code</CardButton></a>
        </div>
      </Card>
      <Card style={{ gridRow: 'second-card-end', gridColumn: 'line2' }}>
        <CardTitle>Next.js Portfolio</CardTitle>
        <CardImage>Insert Image Here.</CardImage>
        <CardIcons><FaReact/></CardIcons>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="https://pdill.dev" ><CardButton><GoBrowser/>  Demo</CardButton></a>
          <a href="https://github.com/Dillweed5446/pdill.dev" ><CardButton><FaCode/>  Code</CardButton></a>
        </div>
      </Card> */
  return (
    <div style={{ padding: '2rem', backgroundColor: '#4ea5d9ff' }}>
      <header>
          <SectionTitle>Projects</SectionTitle>
        </header >
      <body>
        <div className="grid-container">
        {projectArray.map((item:any, index:number) => {
          return (
          <div className="card" key={`card-${index + 1}`}>
            <CardTitle>{item.title}</CardTitle>
            <CardImage>{item.image}</CardImage>
            <CardIcons><StyledIcons iconArray={item.icons} /></CardIcons>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <a href={item.demoHref}><CardButton><GoBrowser/>  Demo</CardButton></a>
            <a href={item.codeHref}><CardButton><FaCode/>  Code</CardButton></a>
            </div>
          </div>
          )
        })}
        </div>
      </body>
    </div >
  )
}
