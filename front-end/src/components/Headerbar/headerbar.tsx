import React from 'react'
import DropdownMenu from './dropdownMenu'
import { Button } from '../../styles/globalStyledComponents'
import { BlogPostsArray } from './blogPosts'
import '../../styles/headerbar.css'

interface Props {
  id: string
}

export default function HeaderBar ({ id }: Props) {
  return (
<div className='header'>
    <Button><a href='/#top'>Home</a></Button>
    <Button><a href='/#about'>About</a></Button>
    <Button><a href='/#projects'>Projects</a></Button>
    <DropdownMenu menuOptions={BlogPostsArray}>Blog Posts</DropdownMenu>
    <Button><a href='/#contact'>Contact Me</a></Button>
    <Button><a>Resume</a></Button>
</div>
  )
}
