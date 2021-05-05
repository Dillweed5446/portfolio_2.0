import React, { useState } from 'react'
import styled from 'styled-components'
import OutsideClickHandler from 'react-outside-click-handler'
import './styles/dropdownMenu.css'

interface Props {
    children?: React.ReactNode,
    style?: object,
    menuOptions: Array<any> | Object
}

export const Button = styled.button`
color: green;
border-bottom: 2px solid #daa520;
padding: .5rem;
margin: .5rem;
background: transparent;
font-weight: 800;
border-radius: .7rem;
`

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
background: rgb(211,211,211);
justify-content: flex-start;
align-items: center;
position: absolute;
overflow: auto;
height: 10rem;
width: 10rem;
margin: 1rem;
padding: 1rem;
border-radius: .5rem;
`

export default function DropdownMenu ({ children, style, menuOptions }: Props) {
  const [menuOpen, toggleMenu] = useState(false)

  const handleClick = (e:any) => {
    e.preventDefault()
    toggleMenu(!menuOpen)
  }

  return (
    <div style={{ position: 'sticky' }} >
      <OutsideClickHandler onOutsideClick={handleClick}>
            {menuOpen
              ? <div>
                <Button>{children}</Button>
                <MenuContainer>
                {Object.values(menuOptions).reverse().map((item, index) => (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer"
                    className='menulink' onClick={() => toggleMenu(!menuOpen)}>{item.name}</a>
                ))}
              </MenuContainer>
              </div>
              : <Button onFocus={handleClick}
              > {children}</Button>
            }
          </OutsideClickHandler>
    </div>
  )
}
