import { EPERM } from 'constants'
import React from 'react'
// import styled from 'styled-components'
import { SectionContainer, SectionTitle } from '../styles/globalStyledComponents'

interface Props {
    className?: string
}

// const {component} = styled.{someComponent}`

// `

export default function ContactForm ({ className }: Props) {
  const handleChange (event) {
    
      [event.target.name]: event.target.value
  }
  return (
<SectionContainer>
  <header>
  <SectionTitle>Contact</SectionTitle>
  <p>Questions, comments, words of wisdom?  Please add your contact info and a brief comment.</p>
  </header>
  <body>
  <form onSubmit={handleSubmit}>
            <label>
            <p>Name</p>
            <textarea type='text' name='name' onChange={ handleChange } value={state.name} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Email</p>
            <textarea type='text' name='email' onChange={ handleChange } value={state.email} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Company Name</p>
            <textarea type='text' name='company' onChange={ handleChange } value={state.company} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Comment</p>
            <textarea type='text' name='comment' onChange={ handleChange } value={state.comment} style={{ flex: 1 }}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
  </body>
</SectionContainer>
  )
}
