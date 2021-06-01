import React, { useEffect, useState } from 'react'
import { SectionContainer } from '../styles/globalStyledComponents'
import hualalaiCaldera from '../images/hualalai_caldera_resize.JPEG'
import hualalaiSunrise from '../images/hualalai_sunrise_resize.JPEG'
import kawikaSunrise from '../images/kawika_sunrise_resize.JPEG'
import kohalaField from '../images/kohala_field_resize.JPEG'
import kohalaMorning from '../images/kohala_morning_resize.JPEG'
import maunaKeaSunset from '../images/mauna_kea_sunset_resize.JPEG'
import maunaLoaCaldera from '../images/mauna_loa_caldera_resize.JPEG'
import maunaLoaRoad from '../images/mauna_loa_road_resize.JPEG'
import maxPatch from '../images/max_patch_resize.JPEG'
import maxPatch2 from '../images/max_patch2_resize.JPEG'
import okoeBay from '../images/okoe_bay_resize.JPEG'
import umi from '../images/umi_resize.JPEG'
interface Props {
    className?: string,
    children: React.ReactNode
}

export default function PhotoHeader ({ className, children }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const imageArray = [hualalaiCaldera, maunaKeaSunset, maxPatch2, maunaLoaRoad, hualalaiSunrise, okoeBay,
    kawikaSunrise, kohalaField, kohalaMorning, maunaLoaCaldera, maxPatch, umi]

  useEffect(() => {
    window.setTimeout(() => {
      if (currentIndex === imageArray.length - 1) {
        setCurrentIndex(0)
      } else { setCurrentIndex(currentIndex + 1) }
    }, 5000)
  }, [currentIndex])

  return (
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
}
