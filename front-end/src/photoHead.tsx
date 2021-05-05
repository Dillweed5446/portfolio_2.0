import React/*, { useState, useEffect } */ from 'react'
// import styled from 'styled-components'
import { SectionContainer } from './bio'

interface Props {
    className?: string
}

// const {component} = styled.{someComponent}`

// `

export default function PhotoHeader ({ className }: Props) {
  // const [imageString, setImageString] = useState('')
  // let newImage = ''

  // const iterateImages = () => {
  //   function getRandomIntInclusive (min:number, max:number) {
  //     min = Math.ceil(min)
  //     max = Math.floor(max)
  //     return Math.floor(Math.random() * (max - min + 1) + min)
  //   }
  //   const image = getRandomIntInclusive(0, 30)
  //   setImageString(imagesArray[image])
  // }

  // useEffect(() => {
  //   setInterval(() => {
  //     iterateImages()
  //     console.log(imageString)
  //     newImage = imageString
  //     return newImage
  //   }, 2000)
  // }, [imageString])

  return (
<SectionContainer style={{ backgroundImage: `url(${hualalaiCaldera})`, height: '250px' }}>
    <p>I plan to use the React Awesome slider for this section with a nice looking title section.</p>
</SectionContainer>
  )
}
