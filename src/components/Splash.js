import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Underlined from '../components/Underlined'
import BitcoinAtom from '../assets/graphic.svg'
import { colours } from '../data/variables'
import { fluid } from '../styles/Utils'
import Link from '../components/common/Link'

const Container = styled.div`
    padding-top: 5rem;
    display: grid;
    grid-template-areas: 
        "title    graphic"
        "subtitle graphic"
        "version  graphic";

    @media (max-width: 75rem) {
        text-align: center;
        place-items: center;
        grid-template-areas: 
            "title"
            "subtitle"
            "graphic"
            "version";
    }
   
`

const Title = styled.h1`
     @media (max-width: 75rem) {
        display: grid;
        place-items: center;
    }
    grid-area: title;
`

const SubTitle = styled.h3`
    margin-top: 1rem;
    max-width: 38.75rem;
    grid-area: subtitle;
`

const Version = styled.div`
    ${fluid('margin-top', '2.5rem', '5rem')}
    /* margin-top: 5rem; */
    grid-area: version;
`

const Graphic = styled.img`
    ${fluid('height', '15rem', '29rem')}
    margin-top: 2rem;
    grid-area: graphic;
`



export default function Splash() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        (async function getCount () {
            const response = await fetch('/coins')
            const data = await response.json();
            setCount(data['coins'].length);
        })();
    }, [])
    
    return (
        <Container>
            <Title>
                <Underlined color={colours.dark2}>Get Crypto Logo</Underlined>
                <Underlined color={colours.dark2}>Color Palettes</Underlined>
            </Title>
            <SubTitle>A simple REST API providing cryptocurrency logo color palettes in RGB, HEX & HSL.</SubTitle>
            <Version>
                <h5>Current Version &mdash; 1.0</h5>
                <p>For feature requests or issues please visit the <Link to="https://github.com/strawberrysunset/coinpalette">GitHub repo.</Link></p>
            </Version>
            <Graphic src={BitcoinAtom}></Graphic>
        </Container>
    )
}
