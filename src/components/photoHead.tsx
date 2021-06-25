import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import MoonLoader from 'react-spinners/MoonLoader'
import Preload from 'image-preload'
import { SectionContainer } from '../styles/globalStyledComponents'
import hualalaiCaldera from '../images/hualalai_caldera_resize.webp'
import hualalaiSunrise from '../images/hualalai_sunrise_resize.webp'
import kawikaSunrise from '../images/kawika_sunrise_resize.webp'
import kohalaField from '../images/kohala_field_resize.webp'
import kohalaMorning from '../images/kohala_morning_resize.webp'
import maunaKeaSunset from '../images/mauna_kea_sunset_resize.webp'
import maunaLoaCaldera from '../images/mauna_loa_caldera_resize.webp'
import maunaLoaRoad from '../images/mauna_loa_road_resize.webp'
import maxPatch from '../images/max_patch_resize.webp'
import maxPatch2 from '../images/max_patch2_resize.webp'
import okoeBay from '../images/okoe_bay_resize.webp'
import umi from '../images/umi_resize.webp'
interface Props {
    className?: string,
    children: React.ReactNode,
    style?: object
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default function PhotoHeader ({ className, children }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const imageArray = [hualalaiCaldera, maunaKeaSunset, maxPatch2, maunaLoaRoad, hualalaiSunrise, okoeBay,
    kawikaSunrise, kohalaField, kohalaMorning, maunaLoaCaldera, maxPatch, umi]

  Preload(imageArray, {
    onComplete: () => setIsLoading(false)
  })

  useEffect(() => {
    window.setTimeout(() => {
      if (currentIndex === imageArray.length - 1) {
        setCurrentIndex(0)
      } else { setCurrentIndex(currentIndex + 1) }
    }, 5000)
  }, [currentIndex])

  return (
    isLoading
      ? (
      <div>
        <MoonLoader color='blue' loading={true} css={override} size={150} />
      </div>
        )
      : (
<SectionContainer style={{
  backgroundImage: `url(${imageArray[currentIndex]})`,
  transition: 'left 2s ease-in-out, background-image ease-out 2s',
  height: '250px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
{children}
</SectionContainer>
        )
  )
}
