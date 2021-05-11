import React from 'react'
import styled from 'styled-components'
import PD from './resized_photos/PD_Profile_Pic.resized.jpg'

interface Props {
    className?: string,
    children?: React.ReactNode,
    style?: object
}

export const SectionContainer = styled.div`
max-width: 100%;
border-bottom: .2rem solid black;
flex: auto;
padding: 3rem;
`

export default function PersonalBio ({ className, children, style }: Props) {
  return (
    <SectionContainer>
        <p>This will be my personal bio section.</p>
        <img src={PD} className="Profile_Pic" alt="PD" />
    </SectionContainer>
  )
}
