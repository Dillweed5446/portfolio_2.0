import React, { useState } from 'react'
import { Button, MenuContainer } from '../../styles/globalStyledComponents'
import OutsideClickHandler from 'react-outside-click-handler'
import '../../styles/dropdownMenu.css'

interface Props {
    children?: React.ReactNode,
    style?: object,
    menuOptions: Array<any> | Object
}

export default function DropdownMenu ({ children, style, menuOptions }: Props) {
  const [menuOpen, toggleMenu] = useState(false)

  const handleClick = (e:any) => {
    e.preventDefault()
    toggleMenu(!menuOpen)
  }

  return (
    <div style={{ position: 'sticky' }} >
      <OutsideClickHandler onOutsideClick={() => toggleMenu(false)}>
            {menuOpen
              ? <div>
                {/* Add hover effect to button */}
                <Button>{children}</Button>
                <MenuContainer>
                {Object.values(menuOptions).reverse().map((item, index) => (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer"
                    className='menulink' onClick={() => toggleMenu(!menuOpen)}>{item.name}</a>
                ))}
              </MenuContainer>
              </div>
              : <Button onFocus={handleClick} style={{ cursor: 'pointer' }}
              > {children}</Button>
            }
          </OutsideClickHandler>
    </div>
  )
}
