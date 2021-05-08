import React/*, { useEffect, useState } */ from 'react'
import { SectionContainer } from './bio'
// import hualalaiCaldera from './resized_photos/hualalai_caldera_resize.JPEG'
// import hualalai from './resized_photos/hualalai_resize.JPEG'
// import hualalaiSunrise from './resized_photos/hualalai_sunrise_resize.JPEG'
// import kawikaSunrise from './resized_photos/kawika_sunrise_resize.JPEG'
// import kohalaField from './resized_photos/kohala_field_resize.JPEG'
// import kohalaMorning from './resized_photos/kohala_morning_resize.JPEG'
// import maunaKeaSunset from './resized_photos/mauna_kea_sunset_resize.JPEG'
// import maunaLoaCaldera from './resized_photos/mauna_loa_caldera_resize.JPEG'
// import maunaLoaRoad from './resized_photos/mauna_loa_road_resize.JPEG'
// import maxPatch from './resized_photos/max_patch_resize.JPEG'
// import maxPatch2 from './resized_photos/max_patch2_resize.JPEG'
import okoeBay from './resized_photos/okoe_bay_resize.JPEG'
// import umi from './resized_photos/umi_resize.JPEG'
interface Props {
    className?: string
}

// Ask Alex about this.
// declare let imageInterval: number // This works according to the TSC compiler, but react runtime doesn't accept it.

export default function PhotoHeader ({ className }: Props) {
  // const [currentIndex, setCurrentIndex] = useState<number>(0)

  // const imageArray = [hualalaiCaldera, hualalai, hualalaiSunrise, kawikaSunrise,
  //   kohalaField, kohalaMorning, maunaKeaSunset, maunaLoaCaldera, maunaLoaRoad,
  //   maxPatch, maxPatch2, okoeBay, umi]

  // useEffect(() => {
  //   imageInterval = window.setInterval(() => {
  //     if (currentIndex === imageArray.length - 1) {
  //       setCurrentIndex(0)
  //     } else { setCurrentIndex(currentIndex + 1) }
  //   }, 5000)
  //   clearInterval(imageInterval)
  // }, [])

  return (
<SectionContainer style={{ backgroundImage: `url(${okoeBay})`, height: '250px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <p>I plan to use the React Awesome slider for this section with a nice looking title section.</p>
</SectionContainer>
  )
}
