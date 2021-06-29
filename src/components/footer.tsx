import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaWordpress, FaStackOverflow } from 'react-icons/fa'

interface Props {
    title?: string,
    style?: object
}

const StyledFooterBar = styled.div`
border-top: .2rem solid #4ea5d9ff;
background-color: #14080eff;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: .5rem;
position: sticky;
top: 0;
width: 100vw;
color: #ffc857ff;
font-size: 2rem;
`

export default function FooterBar ({ style, title }: Props) {
  return (
    <StyledFooterBar className='footer'>
            <a href='https://www.linkedin.com/in/paul-dill-99b498aa/'><FaLinkedin /></a>
            <a href='https://github.com/Dillweed5446'><FaGithub /></a>
            <a href='https://stackoverflow.com/users/12745384/pdill5446?tab=profile'><FaStackOverflow /></a>
            <a href='https://pauldill.dev/'><FaWordpress /></a>
        <p style={{ margin: '.5rem', fontSize: '1.2rem' }}>{title}</p>
    </StyledFooterBar>
  )
}
