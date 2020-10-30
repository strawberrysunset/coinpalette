import { createGlobalStyle } from 'styled-components'
import { colours } from '../data/variables'
import { fluid } from './Utils'

export default createGlobalStyle` 

    :root {
        font-family : 'Roboto';
    }

    h1 {
        ${fluid('font-size', '2.375rem', '6.125rem')}
        font-family : 'Domine';
        line-height: 1.1;
        letter-spacing : -0.04em;
        font-weight: 900;
    }

    h2 {
        ${fluid('font-size', '2.5rem', '3rem')}
        font-family : 'Domine';
        font-weight: 900;
    }

    h3 {
        ${fluid('font-size', '1.25rem', '2rem')}
        font-family : 'Domine';
        letter-spacing : -0.05em;
    }

    h4 {
        ${fluid('font-size', '1.25rem', '1.5rem')}
        font-weight: 600;
    }

    h5 {
        ${fluid('font-size', '1rem', '1.25rem')}
        font-weight: 600;
    }

    h6 {
        ${fluid('font-size', '0.875rem', '1rem')}
        font-weight: 500;
    }

    p {
        ${fluid('font-size', '0.8125rem', '0.875rem')}
        line-height: 1.6;
        
    }

    button {
        font-size : 0.875rem;
        font-family: 'Roboto';
        text-transform: uppercase;
        letter-spacing : 1.15;
        line-height : 1.6;
    }

    code {
        font-size: 0.875rem;
        font-family: 'Roboto Mono';
        line-height : 1.6;
        white-space: pre;
    }

    strong {
        font-weight: bold;
    }

    a:active {
        color : ${colours.dark2};
    }
    a:hover {
        color: ${colours.accent};
    }

    button:active {
        background-color: ${colours.accent};
    }
    button:hover {
        background-color: ${colours.light3};
    }
    input {
        font-size: inherit;
    }

`