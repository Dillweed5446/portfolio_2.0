import React from 'react'
import styled from 'styled-components'
import { FaCode, FaReact } from 'react-icons/fa'
import { GoBrowser } from 'react-icons/go'
import { SectionTitle, Card, GridContainer, GridHeader } from '../styles/globalStyledComponents'
interface Props {
    className?: string,
    style?: object
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

export default function Projects ({ className, style }: Props) {
  // Create map function with array for projects so that I can add github link and auto populate the cards.
  // May try borrowing namedIcons module from Attila Goz to simplify this section
  return (
    <GridContainer style={{ borderBottom: '.2rem solid black' }}>
      <GridHeader>
        <SectionTitle>Projects</SectionTitle>
      </GridHeader>
      <Card style={{ gridRow: 'title-end', gridColumn: 'line2' }}>
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
          {/* Deploy dis buggah then add url! */}
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
      </Card>
    </GridContainer>
  )
}
