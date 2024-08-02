import Login from '../../components/Login';
import Signin from '../../components/Signin';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:clamp(10rem, 12rem + 12.5vw, 25rem);
    justify-content:center;
    border-radius:2rem;
    border: 1px solid black;
    width:fit-content;
`

const PageDisplay = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
`

export default function LoginPage() {

    return (
        <PageDisplay>
            <Wrapper>
                <Login />
                <Signin />
            </Wrapper>
        </PageDisplay>
    )
}