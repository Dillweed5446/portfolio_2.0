import React, { useState } from 'react'
// import styled from 'styled-components'
import { SectionContainer, SectionTitle } from '../styles/globalStyledComponents'

interface Props {
    className?: string
}

// const {component} = styled.{someComponent}`

// `

export default function ContactForm ({ className }: Props) {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [userComment, setUserComment] = useState('')

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    console.log(`Name: ${userName}, Comment: ${userComment}`)
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
            <textarea name='name' onChange={e => setUserName(e.target.value) } value={userName} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Email</p>
            <textarea name='email' onChange={e => setUserEmail(e.target.value) } value={userEmail} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Company Name</p>
            <textarea name='company' onChange={e => setCompanyName(e.target.value) } value={companyName} style={{ flex: 1 }}/>
            </label>
            <label>
            <p>Comment</p>
            <textarea name='comment' onChange={e => setUserComment(e.target.value) } value={userComment} style={{ flex: 1 }}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
  </body>
</SectionContainer>
  )
}
