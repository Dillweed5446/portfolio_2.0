import styled from 'styled-components'
// Read about creating theme using styled components and TypeScript
const SectionContainer = styled.div`
max-width: 100%;
border-bottom: .2rem solid black;
flex: auto;
padding: 5rem;
`

const Button = styled.button`
color: green;
border-bottom: 2px solid #daa520;
padding: .5rem;
margin: .5rem;
background: transparent;
font-weight: 800;
border-radius: .7rem;
`

export default { SectionContainer, Button }
