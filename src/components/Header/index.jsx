import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext, UserContext } from '../../utils/context';

const HeaderElement = styled.header`
    display:grid;
    grid-template-columns:1fr 1rem 1rem;
    gap:1rem;
    justify-content:center;
    align-items:center;
    padding:1rem;
`

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { addToken } = useContext(UserContext)

    function disconnect() {
        addToken('');
        window.location = '/login'
    }

    return (
        <HeaderElement>
            <h1><i className="fa-regular fa-calendar-days"></i> Calend'Home</h1>
            <i className="fa-solid fa-arrow-right-from-bracket" onClick={disconnect}></i>
            {theme === 'dark' ?
                <i className="fa-regular fa-sun" onClick={toggleTheme}></i>
                :
                <i className="fa-regular fa-moon" onClick={toggleTheme}></i>
            }
        </HeaderElement>
    )
}