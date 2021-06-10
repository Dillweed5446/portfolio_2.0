import React from 'react'
import DropdownMenu from './dropdownMenu'
import { Button } from '../../styles/globalStyledComponents'
import { BlogPostsArray } from './blogPosts'
import '../../styles/headerbar.css'

export default function HeaderBar () {
  function clickHandler (id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
<div className='header'>
    <Button onClick={() => clickHandler('home')} >Home</Button>
    <Button onClick={() => clickHandler('about')} >About</Button>
    <Button onClick={() => clickHandler('projects')}>Projects</Button>
    <DropdownMenu menuOptions={BlogPostsArray}>Blog Posts</DropdownMenu>
    <Button onClick={() => clickHandler('contact')}>Contact Me</Button>
    <Button>Resume</Button>
</div>
  )
}
