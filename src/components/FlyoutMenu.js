import React from 'react'
import styled from 'styled-components'
import { colours } from '../data/variables'
import CloseBox from '../assets/closebox.svg'

const Container = styled.div`
    margin: 0 auto;
    position: absolute;
    padding-top: 2.5rem;
    padding-bottom: 2rem;
    width: 9.75rem;
    right: 0rem;
    border-radius: 0.25rem 0 0 0.25rem;
    background: ${colours.light};
    color: ${colours.dark2};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const CloseButton = styled.button`
    background-image: url(${CloseBox});
    background-size: cover;
    height: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
    margin-left: auto;
`

export default function FlyoutMenu({ closeFlyout, children }) {
    return (
    <Container onMouseLeave={closeFlyout}>
        <CloseButton onClick={closeFlyout}/>
        {children}
    </Container>
    )
}
