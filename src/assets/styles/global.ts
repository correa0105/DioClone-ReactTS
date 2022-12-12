import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0
    }

    input {
        outline: none;
    }

    body {
        background-color: #1E192C;
        color: #FFFFFF;
    }

    a {
        text-decoration: none;
    }
`