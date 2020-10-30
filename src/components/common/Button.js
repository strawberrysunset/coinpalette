import React from 'react'
import styled from 'styled-components'
import { colours } from '../../data/variables'

const ButtonElement = styled.button`
    padding: 0 1.5rem;
    color: ${colours.dark};
    font-weight: 600;
    border-radius: 2rem;
    height: 2.5rem;
`

export default function Button ({ children, className }) {
    return <ButtonElement className={className}>{children}</ButtonElement>
}