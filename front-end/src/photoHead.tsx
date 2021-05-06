import React, { useState, useEffect } from 'react'
import { SectionContainer } from './bio'
import hualalaiCaldera from './resized_photos/hualalai_caldera_resize.JPEG'
import hualalai from './resized_photos/hualalai_resize.JPEG'
import hualalaiSunrise from './resized_photos/hualalai_sunrise_resize.JPEG'
import kawikaSunrise from './resized_photos/kawika_sunrise_resize.JPEG'
import kohalaField from './resized_photos/kohala_field_resize.JPEG'
import kohalaMorning from './resized_photos/kohala_morning_resize.JPEG'
import maunaKeaSunset from './resized_photos/mauna_kea_sunset_resize.JPEG'
import maunaLoaCaldera from './resized_photos/mauna_loa_caldera_resize.JPEG'
import maunaLoaRoad from './resized_photos/mauna_loa_road_resize.JPEG'
import maxPatch from './resized_photos/max_patch_resize.JPEG'
import maxPatch2 from './resized_photos/max_patch2_resize.JPEG'
import okoeBay from './resized_photos/okoe_bay_resize.JPEG'
import umi from './resized_photos/umi_resize.JPEG'
interface Props {
    className?: string
}

export default function PhotoHeader ({ className }: Props) {
  const [imageString, setImageString] = useState(hualalaiCaldera)
  let newImage = ''

  const imageArray = [hualalaiCaldera, hualalai, hualalaiSunrise, kawikaSunrise,
    kohalaField, kohalaMorning, maunaKeaSunset, maunaLoaCaldera, maunaLoaRoad,
    maxPatch, maxPatch2, okoeBay, umi]

    // Below is the setup for Attila's photo slider.  See how it works, and try it out!
    // useEffect(() => {
    //   const backgroundImages = [
    //     backgroundImage1,
    //     backgroundImage2,
    //     backgroundImage3,
    //     backgroundImage5,
    //     backgroundImage6,
    //     backgroundImage7,
    //     backgroundImage8,
    //   ];
    //   let imagePosition = 0;
    //   if (
    //     "IntersectionObserver" in window &&
    //     "IntersectionObserverEntry" in window &&
    //     "intersectionRatio" in window.IntersectionObserverEntry.prototype
    //   ) {
    //     let observerBackground = new IntersectionObserver((entries) => {
    //       if (entries[0].boundingClientRect.y < 0) {
    //         const homeElement = document.getElementById("home");
    //         imagePosition =
    //           ++imagePosition >= backgroundImages.length ? 0 : imagePosition++;
    //         homeElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImages[imagePosition]})`;
    //       }
    //     });
    //     observerBackground.observe(document.querySelector("#anchor_background"));
    //   }
    // }, []);

  const iterateImages = () => {
    function getRandomIntInclusive (min:number, max:number) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const image = getRandomIntInclusive(0, 30)
    setImageString(imageArray[image])
  }

  useEffect(() => {
    setInterval(() => {
      iterateImages()
      newImage = imageString
      return newImage
    }, 5000)
  }, [])

  return (
<SectionContainer style={{ backgroundImage: `url(${imageString})`, height: '250px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <p>I plan to use the React Awesome slider for this section with a nice looking title section.</p>
</SectionContainer>
  )
}
