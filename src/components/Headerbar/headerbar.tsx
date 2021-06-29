import React, { useState } from 'react'
import DropdownMenu from './dropdownMenu'
import { Button, MenuContainer } from '../../styles/globalStyledComponents'
import { BlogPostsArray } from './blogPosts'
import OutsideClickHandler from 'react-outside-click-handler'
import '../../styles/headerbar.css'
import '../../styles/dropdownMenu.css'
import resume from '../../Paul_Dill_junior_developer_PDF.pdf'

export default function HeaderBar () {
  const [menuOpen, toggleMenu] = useState(false)

  const clickHandler = (id: string) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleClick = (e:any) => {
    e.preventDefault()
    toggleMenu(!menuOpen)
  }

  return (
    window.matchMedia('(max-device-width: 849px)').matches
      ? (
    <div className="header" style={{ position: 'sticky' }} >
      <OutsideClickHandler onOutsideClick={() => toggleMenu(false)}>
            {menuOpen
              ? <div>
                <Button style={{ fontSize: 'large', margin: 0 }}>☰</Button>
                <MenuContainer>
                  <Button onClick={() => {
                    toggleMenu(false)
                    clickHandler('home')
                  }} >Home</Button>
                  <Button onClick={() => {
                    toggleMenu(false)
                    clickHandler('about')
                  }} >About</Button>
                  <Button onClick={() => {
                    toggleMenu(false)
                    clickHandler('projects')
                  }}>Projects</Button>
                  <Button onClick={() => {
                    toggleMenu(false)
                    clickHandler('contact')
                  }}>Contact Me</Button>
                  <Button><a href={resume}>Resume</a></Button>
              </MenuContainer>
              </div>
              : <Button style={{ fontSize: 'x-large', margin: 0 }} onFocus={handleClick}
              > ☰</Button>
            }
          </OutsideClickHandler>
          <DropdownMenu menuOptions={BlogPostsArray}>Blog Posts</DropdownMenu>
    </div>
        )
      : (

<div className='header'>
    <Button onClick={() => clickHandler('home')} >Home</Button>
    <Button onClick={() => clickHandler('about')} >About</Button>
    <Button onClick={() => clickHandler('projects')}>Projects</Button>
    <DropdownMenu menuOptions={BlogPostsArray}>Blog Posts</DropdownMenu>
    <Button onClick={() => clickHandler('contact')}>Contact Me</Button>
    <Button><a href={resume}>Resume</a></Button>
</div>
        )
  )
}
