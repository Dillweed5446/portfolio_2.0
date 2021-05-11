import React from 'react'
import styled from 'styled-components'
// import { SectionContainer } from './bio'

interface Props {
    className?: string
}

// Create responsive styles so the cards become single file on small screens
const GridContainer = styled.div`
display: grid;
grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
// 8rem;
grid-template-columns: [first] 5% [line2] 42% [line3] auto [col4-start] 42% [five] 5% [end];
// 5rem 20rem 10rem 20rem 5rem;
`

const Card = styled.div`
background: lightgrey;
// width: 25rem;
// height: 15rem;
// padding: 1.5rem;
// margin: .7rem;
border-radius: 2rem;
`

export default function Projects ({ className }: Props) {
  // Create map function with array for projects so that I can add github link and auto populate the cards.
  return (
<div>
  {/* make this div a styled title container and use it in every section */}
  <div style={{ width: '7rem', margin: 'auto' }}>
    {/* Create h2 title for all sections as an exportable styled component, then add it below in place of the h2 */}
    <h2 style={{ textAlign: 'center', borderBottom: '.2rem solid black' }}>Projects</h2>
  </div>
  <GridContainer>
    <Card>A</Card>
    <Card>B</Card>
    <Card>C</Card>
    <Card>D</Card>
    <Card>E</Card>
  </GridContainer>
</div>
  )
}
