import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

interface Props {
    children?: React.ReactNode,
    style?: object,
    menuOptions: Array<any> | Object

}

export const Button = styled.button`
color: green;
background-color: red;
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

  return (
    <div style={{ position: 'sticky' }}>
        <Button onFocus={() => toggleMenu(!menuOpen)}
                onBlur={() => toggleMenu(!menuOpen)}> {children}
          <div>
            {menuOpen
              ? <MenuContainer>
                {Object.values(menuOptions).map((item, index) => (
                  <Button key={index} >
                    <a href={item.href} onClick={() => toggleMenu(!menuOpen)}>{item.name}</a>
                  </Button>
                ))}
              </MenuContainer>
              : <Fragment />
            }
          </div>
        </Button>
    </div>
  )
}
