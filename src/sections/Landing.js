import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Splash from '../components/Splash'
import { colours, breakpoints } from '../data/variables'
import ArrowImage from '../assets/arrow.svg'
import { fluid } from '../styles/Utils'

const Container = styled.div`
    color: ${colours.light};
    width: 100%;
    max-width: 1250px;
    ${fluid('padding-top', '1rem', '6.5rem')};
    ${fluid('padding-bottom', '2rem', '5rem')};
    ${fluid('padding-left', '1rem', '6rem')};
    ${fluid('padding-right', '1rem', '6rem')};
`

const Background = styled.div`
    display: grid;
    place-items: center;
    background-color: ${colours.dark};
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2327557d' fill-opacity='0.7' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
`
const Arrow = styled.img`
    height: 2rem;
    display: block;
    margin: 0 auto;
    margin-top: 2.5rem;
`

export default function Landing() {
    return (
        <Background>
            <Container>
                <NavBar/>
                <Splash/>
                <Arrow src={ArrowImage}/>
            </Container>
        </Background>
    )
}



