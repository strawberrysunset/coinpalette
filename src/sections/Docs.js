import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Underlined from '../components/Underlined'
import { colours } from '../data/variables'
import Box from '../components/Box'
import APILogo from '../assets/books.svg'
import Article from '../components/common/Article'
import Method from '../components/Method'
import { fluid } from '../styles/Utils'


const Container = styled.div`
    color: ${colours.dark};
    max-width: 35.5rem;   
    margin: 0 auto;
    padding: 0 1rem;
    ${fluid('padding-top', '3rem', '120rem')};
    ${fluid('padding-bottom', '3rem', '120rem')};
`

const Title = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 0.5rem;
    margin-bottom: 1rem;
`

const TitleText = styled.h2`
`
const TitleLogo = styled.img`
    height: 3rem;
    margin-right: 0.5rem;
`
const Input = styled.input`
    background: ${colours.light};
    width: 100%;

  
`

const Bold = styled.span`
  font-weight: bold;
`

export default function Docs() {

    const [fetchResponse, setFetchReponse] = useState('')
    const [url, setUrl] = useState("/colors?coins=bitcoin")

    useEffect(() => {
        fetchData()
    });

    async function fetchData () {
        const response = await fetch(url)
        const json = await response.json()
        const jsonString = JSON.stringify(json, null, 2)
        setFetchReponse(jsonString[0] ? jsonString : 'Error fetching data.')
    }

    return (
        <Container>
            <Title>
                <TitleLogo src={APILogo}></TitleLogo>
                <Underlined color={colours.light2}>
                    <TitleText>Usage</TitleText>
                </Underlined>
            </Title>
            <Article>
                <p>This API was created as a tool for client-side rendered sites that require cryptocurrency logo color information. The API is very simple, featuring just 2 endpoints. <br></br><br></br> <Bold>/coins</Bold> returns a list of supported cryptocurrencies. <br></br> <Bold>/colors</Bold> takes a list of cryptocurrencies and returns a color palette for each.</p>
                <h4>Example</h4>
                <p>An example API request specifying coins and color format. Try it for yourself by editing the request below.</p>
                <Box title="Request">
                    <code><Input onChange={(event) => setUrl(event.target.value)} value={url}/></code>
                </Box>
                <p>Corresponding JSON response with fields for each color variant:</p>
                <Box title="Response">
                    <code>{fetchResponse}</code>
                </Box>
                <h4>Endpoints</h4>
                <p>List of API endpoints and respective parameters. * = Required Parameter.</p>
                <Method type="GET" path="/coins" summary="Fetch a list of coins."/>
                <Method type="GET" path="/colors" summary="Fetch color palettes."/>
                <p><strong>coins*</strong> &mdash; List of cryptocurrencies you wish to fetch palettes for.</p>
            </Article>
        </Container>
    )
}
