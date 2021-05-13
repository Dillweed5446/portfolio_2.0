import React from 'react'
import styled from 'styled-components'

interface Props {
    style?: object
    iconArray: any,
    children?: any
}

const IconWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

export default function StyledIcon ({ style, iconArray, children }:Props) {
  return (
      <div>
      {iconArray.map((item:any, index:number) => {
        return (
              <IconWrapper key={index}>
                <div>
                    {item.map((item:any, index:number) => {
                      return (
                            <div key={index}>
                                {item.icon}
                                {item.tech}
                            </div>
                      )
                    }
                    )}
                </div>
                    </IconWrapper>
        )
      })}
        </div>
  )
}
