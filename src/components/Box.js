import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'
import { fluid } from '../styles/Utils'


const Container = styled.div`
    margin-top: 2rem;
    margin-bottom: 3rem;
    /* border: 0.5px solid ${colours.light2}; */
    box-shadow: 1rem 0.5rem 3rem ${colours.light3};
`
const Header = styled.h6`
    ${fluid('padding-top', '1rem', '1rem')}
    ${fluid('padding-bottom', '1rem', '1rem')}
    ${fluid('padding-right', '1rem', '1.5rem')}
    ${fluid('padding-left', '1rem', '1.5rem')}
    background: ${colours.dark};
    color: ${colours.light};
    border-bottom: 0.5px solid ${colours.light2}; 
`

const Content = styled.div`
    color : ${colours.dark2};
    background: ${colours.light};
    /* border: 1px solid ${colours.dark3}; */
    ${fluid('padding-top', '1rem', '1.5rem')}
    ${fluid('padding-bottom', '1rem', '1.5rem')}
    ${fluid('padding-right', '1.5rem', '2rem')}
    ${fluid('padding-left', '1.5rem', '2rem')}
    overflow: auto;
    max-height: 300rem;
    /* text-shadow: 0rem 0rem 1rem ${colours.light3}; */
`


export default function Box({ title, children }) {
    return (
        <Container>
            <Header>{title}</Header>
            <Content>{children}</Content>
        </Container>
    )
}
