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
            Hi, I&apos;m Paul Dill.  I&apos;ve been learning web development since the summer of 2019, and working professionally as as front-end engineer
            since August 2021.  Currently, I&apos;m building the user interface of an integrated control system for a series of automonous forklifts and shuttles.
            The vast majority of my work on this project has been done using Angular, SASS, D3.js, and Gitlab.  I&apos;ve also read through our C# repo a good bit
            when figuring out how to interact with the backend through our api&apos;s, but I&apos;m not proficient at coding in C# yet.
             This is proprietary software, so I&apos;m unable to show any examples here on my portfolio, but I do have some screenshots on my personal computer, that I&apos;d be willing
            to display during an interview.</p>
            <p style={{ marginTop: 0, fontSize: '1.5rem' }}> In my free time, I&apos;m learning Vue.js (Nuxt.js), and improving my Node.js skills.  Links for my most recent side projects
            will appear in the <a style={{ color: '#4ea5d9ff', cursor: 'pointer' }} onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' })}>projects section below</a> as they become presentable.
            When I&apos;m not coding, I enjoy spending time in nature hiking, gardening, running and paddling outrigger canoes, or enjoying my time with my daughter.  I&apos;m also an active member at my canoe club&nbsp;
             <a style={{ color: '#4ea5d9ff', cursor: 'pointer' }} href='http://www.keouacanoeclub.com/'>Keoua Honaunau Canoe Club</a>.&nbsp; &nbsp;
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
            Hi, I&apos;m Paul Dill.  I&apos;ve been learning web development since the summer of 2019, and working professionally as as front-end engineer
            since August 2021.  Currently, I&apos;m building the user interface of an integrated control system for a series of automonous forklifts and shuttles.
            The vast majority of my work on this project has been done using Angular, SASS, D3.js, and Gitlab.  I&apos;ve also read through our C# repo a good bit
            when figuring out how to interact with the backend through our api&apos;s, but I&apos;m not proficient at coding in C# yet.
             This is proprietary software, so I&apos;m unable to show any examples here on my portfolio, but I do have some screenshots on my personal computer, that I&apos;d be willing
            to display during an interview.</p>
            <p style={{ marginTop: 0, fontSize: '1.5rem' }}> In my free time, I&apos;m learning Vue.js (Nuxt.js), and improving my Node.js skills.  Links for my most recent side projects
            will appear in the <a style={{ color: '#4ea5d9ff', cursor: 'pointer' }} onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' })}>projects section below</a> as they become presentable.
            When I&apos;m not coding, I enjoy spending time in nature hiking, gardening, running and paddling outrigger canoes, or enjoying my time with my daughter.  I&apos;m also an active member at my canoe club&nbsp;
            <a style={{ color: '#4ea5d9ff', cursor: 'pointer' }} href='http://www.keouacanoeclub.com/'>Keoua Honaunau Canoe Club</a>.&nbsp; &nbsp;
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
