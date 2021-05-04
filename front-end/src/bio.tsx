import React from 'react'
// import styled from 'styled-components'
import PD from './PD_Profile_Pic.resized.jpg'

interface Props {
    className?: string
}

// const {component} = styled.{someComponent}`

// `

export default function PersonalBio ({ className }: Props) {
  return (
    <div>
        <p>This will be my personal bio section.</p>
        <img src={PD} className="Profile_Pic" alt="PD" />
    </div>
  )
}
