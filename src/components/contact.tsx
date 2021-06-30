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
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    if (userName.length < 3) {
      alert('Name must be more than 3 characters')
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(userEmail)) {
      alert('Invalid Email')
    }
    Axios.post('https://pd-portfolio-contact.herokuapp.com/contact', {
      name: userName,
      email: userEmail,
      company: companyName,
      comment: userComment
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://pd-portfolio-contact.herokuapp.com/contact'
      }
    }).then((response) => { setContactSubmitted(true) })
      .catch(err => alert(err))
  }

  if (!contactSubmitted && window.matchMedia('(max-device-width: 849px)').matches) {
    return (
      <SectionContainer color='#eee' id='contact' style={{ padding: '1rem' }}>
      <header>
      <SectionTitle>Contact</SectionTitle>
      <p>Questions, comments, words of wisdom?  Please add your contact info and a brief comment.</p>
      </header>
      <body>
      <form className='form' onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '70%', justifyContent: 'center' }}>
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
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '90%' }}>
                <label>
                <p>Comment</p>
                <textarea name='comment' onChange={e => setUserComment(e.target.value)} value={userComment} style={{ width: '20rem', height: '10rem' }}/>
                </label>
                <button type='submit' style={{ height: '2rem', fontSize: '1.2rem', background: '#4ea5d9ff', margin: '1rem 0' }}>Submit</button>
              </div>
            </form>
      </body>
    </SectionContainer>
    )
  } else if ((!contactSubmitted && window.matchMedia('(min-device-width: 850px)').matches)) {
    return (
        <SectionContainer color='#eee' id='contact'>
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
                  <button type='submit' style={{ height: '2rem', fontSize: '1.2rem', background: '#4ea5d9ff', margin: '1rem 0' }}>Submit</button>
                </div>
              </form>
        </body>
      </SectionContainer>
    )
  } else {
    return (
      <div id='contact'>
        <header>
          <SectionTitle>Contact</SectionTitle>
        </header>
        <div style={{ padding: '0 2rem 2rem 2rem', textAlign: 'center' }}>
          <h2>Thank you!  Mahalo!  Merci!  Gracias!  Grazie!  ありがとう!</h2>
          <p>Thanks for reaching out.  I&apos;ll be sure to get back to you as soon as possible.</p>
        </div>
      </div>
    )
  }
}
