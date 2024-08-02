import { useContext, useState } from "react";
// import { useFetch } from '../../utils/hooks'
import { ThemeContext } from "../../utils/context";
import styled from "styled-components";
import PlaninngsList from "../PlanningsList";

const Container = styled.div`
    z-index:10;
    width:${({ $isOpen }) => $isOpen ? "15rem" : "3rem"};
    position:absolute;
    left:0;
    top:0;
    height:100%;
    padding:1rem;
    background-color: var(--color-darkmode);
    color: var(--font-color-darkmode);
    transition: all .3s;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    border-radius:0 3rem 3rem 0;
    // gap:${({ $isOpen }) => $isOpen ? "1rem" : "0"};
    `
const CloseButton = styled.button`
    color: var(--font-color-darkmode);
    background-color:transparent;
    border:none;
    transition:all .5s;
    height:100%;
    width:fit-content;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border-radius:0 2rem 2rem 0;
    &:hover{background-color:rgba(255,255,255,.3)}
    & span{
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`

const Arrow = styled.span`
    margin:auto;
    transition:all .6s;
    transform:rotate(${({ $isOpen }) => !$isOpen ? "90deg" : "270deg"});
    &:after{content:"\xab";}
`

const PlanningContainer = styled.div`
    max-width:${({ $isOpen }) => $isOpen ? "12rem" : "0rem"};
    overflow:hidden;
    display:flex;
    flex-direction:column;
`

const Overlay = styled.div`
    position:absolute;
    z-index:9;
    left:0;
    top:0;
    height:${({ $isOpen }) => $isOpen ? "100%" : "0"};
    width:${({ $isOpen }) => $isOpen ? "100%" : "0"};
`

export default function SideBar({ setActionPlanning }) {
    const [isOpen, setOpen] = useState(false)
    const { theme } = useContext(ThemeContext)
    const toggleSideBar = () => setOpen(!isOpen)
    return (
        <>
            <Container $isDarkMode={theme === 'dark'} $isOpen={isOpen}>
                <PlanningContainer $isOpen={isOpen}>
                    <h2>Vos plannings</h2>
                    <PlaninngsList setActionPlanning={setActionPlanning} />
                </PlanningContainer>
                <CloseButton onClick={toggleSideBar}>
                    <Arrow $isOpen={isOpen} />
                    <span>Cliquer pour {isOpen ? "réduire" : "agrandir"}</span>
                    <Arrow $isOpen={isOpen} />
                </CloseButton>
            </Container>
            <Overlay $isOpen={isOpen} onClick={toggleSideBar} />
        </>
    )
}