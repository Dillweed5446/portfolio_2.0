import React from 'react'
// import styled from 'styled-components'
import { SectionContainer } from './bio'

interface Props {
    className?: string
}

// const {component} = styled.{someComponent}`

// `

export default function Projects ({ className }: Props) {
  return (
<SectionContainer>
    <p>This section will house a series of cards which outline and link to my projects and the repos for those projects.</p>
</SectionContainer>
  )
}
