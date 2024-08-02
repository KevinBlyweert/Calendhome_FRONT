import styled from "styled-components"
import AddPlanning from "../AddPlanning"

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:3rem;
    height:100%;
`

export default function NotFound({ setActionPlanning }) {
    return (
        <Container>
            <h2>Choisir ou créer un planning pour le consulter</h2>
            <AddPlanning setActionPlanning={setActionPlanning} />
        </Container>
    )
}