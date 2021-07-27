import React from 'react'
import styled from 'styled-components'

interface Props {
    style?: object
    iconArray: any,
    children?: any
}

const IconWrapper = styled.div`
max-width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin-bottom: 1rem;
padding: 0 2rem;
@media (max-width: 650px) {
  padding: 0.2rem;
}
`

const CardIcons = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
padding: 1rem 0;
height: 3rem;
background-color: transparent;
`

export default function StyledIcon ({ style, iconArray, children }:Props) {
  return (
            <IconWrapper >
      {iconArray.map((item:any, index:number) => {
        return (
                <CardIcons key={index}>
                    <img style={{ height: '2rem' }}src={item.icon} alt={item.tech}/>
                    <p style={{ fontSize: '1rem', margin: '0', textAlign: 'center' }}>{item.tech}</p>
                </CardIcons>
        )
      })}
    </IconWrapper>
  )
}
