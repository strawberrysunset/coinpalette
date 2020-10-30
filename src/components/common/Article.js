import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    > p {
        margin-top: 0.5rem;
        /* margin-bottom: 1rem; */
    }
    > h1 { 
        margin-top: 0.5rem;
        /* margin-bottom: 0.5rem; */
    }
    > h2 { 
        margin-top: 0.5rem;
        /* margin-bottom: 100rem; */
    }
    > h3 { 
        margin-top: 0.5rem;
        /* margin-bottom: 1rem; */
    }
    > h4 { 
        margin-top: 2rem;
        /* margin-bottom: 0.5rem; */
    }
    > h5 { 
        margin-top: 1rem;
        /* margin-bottom: 0.5rem; */
    }
    > h6 { 
        margin-top: 0.5rem;
        /* margin-bottom: 0.5rem; */
    }
`


export default function Article({ children }) {
    return (
        <Container>{children}</Container>
    )
}
