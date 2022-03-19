import React from 'react'
import { SectionContainer, SectionTitle } from '../styles/globalStyledComponents'
import PD from '../images/PD_small.webp'

interface Props {
    className?: string,
    children?: React.ReactNode,
    style?: object
}

export default function PersonalBio ({ className, children, style }: Props) {
  return (
    window.matchMedia('(max-device-width: 849px)').matches
      ? (
      <SectionContainer className="bio" id='about' style={{ padding: '2rem' }}>
      <header >
        <SectionTitle color="#14080eff">Hello, and welcome to my portfolio!</SectionTitle>
      </header>
      <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>
            There lives a web developer on an active volcano in the middle of the Pacific Ocean.  The volcano seems to
            give life to this nerd, and inspires greatness within him.  Somehow, he&apos;s managed to learn web development
            while also running a small landscaping business, raising a daughter as a single father, and also making a valiant effort
            to stay in peak physical conditioning.  It&apos;s been a tough journey, but much progress has been made.  </p>
            <p style={{ marginTop: 0, fontSize: '1.5rem' }}>Being a software engineer takes a commitment to a lifetime of learning.  Personally,
            I&apos;m excited for the road ahead.  I can&apos;t yet see where this path will take me, but I&apos;m optimistic about the possibilities.
            Thanks for checking out my portfolio.
            Please use my <a style={{ color: '#4ea5d9ff', cursor: 'pointer' }} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })}>contact form</a> below to drop me a message.
          </p>
        <img src={PD} className="Profile_Pic" alt="PD" style={{ flex: 1, width: '15rem', height: 'auto' }}/>
      </body>
    </SectionContainer>
        )
      : (
    <SectionContainer className="bio" id='about'>
      <header >
        <SectionTitle color="#14080eff">Hello, and welcome to my portfolio!</SectionTitle>
      </header>
      <body style={{ display: 'flex' }}>
        <div style={{ flex: 5, maxWidth: '75%', display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>
            There lives a web developer on an active volcano in the middle of the Pacific Ocean.  The volcano seems to
            give life to this nerd, and inspires greatness within him.  Somehow, he&apos;s managed to learn web development
            while also running a small landscaping business, raising a daughter as a single father, and also making a valiant effort
            to stay in peak physical conditioning.  It&apos;s been a tough journey, but much progress has been made.  </p>
            <p style={{ marginTop: 0, fontSize: '1.5rem' }}>Being a software engineer takes a commitment to a lifetime of learning.  Personally,
            I&apos;m excited for the road ahead.  I can&apos;t yet see where this path will take me, but I&apos;m optimistic about the possibilities.
            Thanks for checking out my portfolio.
            Please use my <a style={{ color: '#4ea5d9ff', cursor: 'pointer' }} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' })}>contact form</a> below to drop me a message.
          </p>
        </div>
        <img src={PD} className="Profile_Pic" alt="PD" style={{ flex: 2, width: 'auto', height: 'auto', marginLeft: '3rem' }}/>
      </body>
    </SectionContainer>
        )
  )
}
