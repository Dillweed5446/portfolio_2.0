import React from 'react'
import { SectionContainer } from '../styles/globalStyledComponents'
import PD from '../resized_photos/PD_Profile_Pic.resized.jpg'

interface Props {
    className?: string,
    children?: React.ReactNode,
    style?: object
}

export default function PersonalBio ({ className, children, style }: Props) {
  return (
    <SectionContainer style={{ backgroundColor: '#eee' }}>
        <p>This will be my personal bio section.</p>
        <img src={PD} className="Profile_Pic" alt="PD" />
    </SectionContainer>
  )
}
