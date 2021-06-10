import React from 'react'
import { SectionContainer, SectionTitle } from '../styles/globalStyledComponents'
import PD from '../images/PD_Profile_Pic.resized.jpg'

interface Props {
    className?: string,
    children?: React.ReactNode,
    style?: object
}

export default function PersonalBio ({ className, children, style }: Props) {
  return (
    <SectionContainer className="bio" id='about'>
      <header style={{ }}>
        <SectionTitle color="#14080eff">Hello, and welcome to my portfolio!</SectionTitle>
      </header>
      <body style={{ display: 'flex' }}>
        <p style={{ flex: 5, fontSize: '1.5rem' }}>
          There lives a web developer on an active volcano in the middle of the Pacific Ocean.  The volcano seems to
          give life to this nerd, and inspires greatness within him.  Somehow, he&apos;s managed to learn web development
          while also running a small landscaping business, raising a daughter as a single father, and also making a valiant effort
          to stay in peak physical conditioning.  Somehow, he manages to half-ass his way through all of this, and the result is, &rdquo;meh...&rdquo;
        </p>
        <img src={PD} className="Profile_Pic" alt="PD" style={{ flex: 1, width: '5rem', height: 'auto', marginLeft: '3rem' }}/>
      </body>
    </SectionContainer>
  )
}
