import styled from 'styled-components'
// Central location for all global styled components

export const SectionContainer = styled.div`
max-width: 100%;
border-bottom: .2rem solid black;
flex: auto;
padding: 5rem;
background: ${props => props.color}
`

export const Button = styled.button`
color: #8acb88ff;
border-bottom: 2px solid #4ea5d9ff;
padding: .5rem;
margin: .5rem;
background: transparent;
font-weight: 800;
border-radius: .7rem;
`

export const MenuContainer = styled.div`
display: flex;
flex-direction: column;
background: #eee;
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
export const SectionTitle = styled.h2`
display: table;
border-bottom: .2rem solid ${props => props.color};
color: ${props => props.color};
text-align: center;
margin: auto;
font-size: 2.5rem;
margin-bottom: 2rem;
`
