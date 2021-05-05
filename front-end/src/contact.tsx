import React from 'react'
// import styled from 'styled-components'
import { SectionContainer } from './bio'

interface Props {
    className?: string
}

// const {component} = styled.{someComponent}`

// `

export default function ContactForm ({ className }: Props) {
  return (
<SectionContainer>
    <p>This section will hold a CRUD contact form that I&apos;ll build using Node.js and MariaDB</p>
</SectionContainer>
  )
}
