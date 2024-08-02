import { useContext } from "react";
import { ThemeContext } from "../context";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    :root{
        --color-darkmode: #111927;
        --font-color-darkmode: #C2E6FF;
        --color-lightmode: #F4FAFF;
        --font-color-lightmode: #113264;
        --primary:#FF681D;
        --secondary:#44C3F6;
    }
    *{
        font-family: "Tilt Neon", sans-serif;
    }
    body{
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'var(--color-darkmode)' : 'var(--color-lightmode)')};
        color: ${({ isDarkMode }) => (isDarkMode ? 'var(--font-color-darkmode)' : 'var(--font-color-lightmode)')};
        margin : 0;
        }
    #root{
        height:100vh;
        width:100vw;
        display:flex;
        flex-direction:column;
    }
    i{
        cursor:pointer;
    }
`

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}