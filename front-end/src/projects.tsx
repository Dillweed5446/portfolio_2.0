import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from './bio'

interface Props {
    className?: string
}

// Create responsive styles so the cards become single file on small screens
const GridContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`

const Card = styled.div`
background: lightgrey;
width: 20rem;
height: 15rem;
padding: 2rem;
margin: 1rem;
border-radius: 2rem;
`

export default function Projects ({ className }: Props) {
  // Create map function with array for projects so that I can add github link and auto populate the cards.
  return (
<SectionContainer>
  {/* make this div a styled title container and use it in every section */}
  <div style={{ width: '7rem', margin: 'auto' }}>
    {/* Create h2 title for all sections as an exportable styled component, then add it below in place of the h2 */}
    <h2 style={{ textAlign: 'center', borderBottom: '.2rem solid black' }}>Projects</h2>
  </div>
  <GridContainer>
    <Card>A</Card>
    <Card>B</Card>
    <Card>C</Card>
  </GridContainer>
  <GridContainer>
    <Card>A</Card>
    <Card>B</Card>
    <Card>C</Card>
  </GridContainer>
</SectionContainer>
  )
}
