// CSS in JS (TS)

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, button, input {
        background-color: F7F7F7;
        font-family: 'Poppins', sans-serif;
    }
`;