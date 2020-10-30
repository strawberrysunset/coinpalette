import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'


const Header = styled.div`
    display:flex;
    align-items: center;
    color: ${colours.dark};
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const Box = styled.p`
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 0.5rem 1rem;
    color: ${colours.light};
` 

const MethodBox = styled(Box)`
    border-radius: 0.25rem 0 0 0.25rem;
    background: ${colours.dark2};
`

const PathBox = styled(Box)`
    border-radius: 0 0.25rem 0.25rem 0;
    background-color: ${colours.dark};
    margin-right: 1rem;
    min-width: 5rem;
`

export default function Method ({ type, path, summary }) {

    return (
        <Header>
            <MethodBox>{ type }</MethodBox>
            <PathBox>{ path }</PathBox>
            <p>{ summary }</p>
        </Header>
    )
}
