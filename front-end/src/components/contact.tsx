import React, { useState } from 'react'
import Axios from 'axios'
import { SectionContainer, SectionTitle } from '../styles/globalStyledComponents'

interface Props {
    className?: string
}

export default function ContactForm ({ className }: Props) {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [userComment, setUserComment] = useState('')

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    if (userName.length < 3) {
      alert('Name must be more than 3 characters')
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(userEmail)) {
      alert('Invalid Email')
    }
    Axios.post('http://localhost:5000/contact', {
      name: userName,
      email: userEmail,
      company: companyName,
      comment: userComment
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5000/contact'
      }
    }).then((response) => { console.log(response) })
  }

  return (
    <SectionContainer color='#eee'>
      <header>
      <SectionTitle>Contact</SectionTitle>
      <p>Questions, comments, words of wisdom?  Please add your contact info and a brief comment.</p>
      </header>
      <body>
      <form className='form' onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row', maxWidth: '70%', justifyContent: 'center' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <label>
                <p>Name</p>
                <input name='name' onChange={e => setUserName(e.target.value) } value={userName} style={{ flex: 1 }}/>
                </label>
                <label>
                <p>Email</p>
                <input name='email' onChange={e => setUserEmail(e.target.value) } value={userEmail} style={{ flex: 1 }}/>
                </label>
                <label>
                <p>Company Name</p>
                <input name='company' onChange={e => setCompanyName(e.target.value) } value={companyName} style={{ flex: 1 }}/>
                </label>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <label>
                <p>Comment</p>
                <textarea name='comment' onChange={e => setUserComment(e.target.value)} value={userComment} style={{ width: '30rem', height: '10rem' }}/>
                </label>
                <button type='submit' style={{ height: '2rem', fontSize: '1.2rem', background: '#4ea5d9ff' }}>Submit</button>
              </div>
            </form>
      </body>
    </SectionContainer>
  )
}
