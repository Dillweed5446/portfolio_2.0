import styled from 'styled-components'
// Central location for all global styled components

export const SectionContainer = styled.div`
max-width: 100%;
border-bottom: .2rem solid black;
flex: auto;
padding: 5rem;
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
textAlign: center;
border-bottom: .2rem solid #ffc857ff;
color: #ffc857ff;
`

export const GridContainer = styled.div`
background-color: #4ea5d9ff;
display: grid;
width: 100vw;
grid-template-rows: [top] 0 [title-start] 3rem [title-end] 27rem [first-card-end]
                    27rem [second-card-end] 27rem [third-card-end] 3rem [end];
grid-template-columns: [line1] 1fr [line2] 10fr [line3] 10fr [line4] 1fr [end];
grid-template-areas:
                    ". header header header ."
                    ". card . card ."
                    ". card . card ."
                    ". card . card .";
row-gap: 2rem;
column-gap: 2%;
`
export const GridHeader = styled.div`
grid-area: header;
grid-row: title-start;
grid-column-start: line2;
grid-column-end: line4;
place-self: center;
`

export const Card = styled.div`
grid-area: card;
background: #eee;
border-radius: 2rem;
`
