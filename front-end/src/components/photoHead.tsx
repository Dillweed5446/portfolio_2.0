import React, { useEffect, useState } from 'react'
import { SectionContainer } from '../styles/globalStyledComponents'
import hualalaiCaldera from '../resized_photos/hualalai_caldera_resize.JPEG'
import hualalaiSunrise from '../resized_photos/hualalai_sunrise_resize.JPEG'
import kawikaSunrise from '../resized_photos/kawika_sunrise_resize.JPEG'
import kohalaField from '../resized_photos/kohala_field_resize.JPEG'
import kohalaMorning from '../resized_photos/kohala_morning_resize.JPEG'
import maunaKeaSunset from '../resized_photos/mauna_kea_sunset_resize.JPEG'
import maunaLoaCaldera from '../resized_photos/mauna_loa_caldera_resize.JPEG'
import maunaLoaRoad from '../resized_photos/mauna_loa_road_resize.JPEG'
import maxPatch from '../resized_photos/max_patch_resize.JPEG'
import maxPatch2 from '../resized_photos/max_patch2_resize.JPEG'
import okoeBay from '../resized_photos/okoe_bay_resize.JPEG'
import umi from '../resized_photos/umi_resize.JPEG'
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
    }, 4000)
  }, [currentIndex])

  return (
<SectionContainer style={{
  backgroundImage: `url(${imageArray[currentIndex]})`,
  transition: 'left 1s ease-in-out, background-image ease-out 1s',
  height: '250px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
{children}
</SectionContainer>
  )
}
