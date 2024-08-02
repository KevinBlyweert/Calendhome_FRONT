import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:${({ $islogin }) => ($islogin ? "#FF6622" : "#2C2BFF")};
    padding:3rem;
    border-radius:${({ $islogin }) => ($islogin ? "2rem 2rem 0 0" : "0 0 2rem 2rem")};
    input[type="radio"]{
        position:absolute;
        opacity:0;
        z-index:-1;
        & ~ label[for^="radio"]{
            cursor:pointer;
        }
        & ~ form{
            max-height:0;
            overflow:hidden;
            transition: all .35s;
        }
        &:checked ~ form{
            max-height:10rem;
        }
    }
`

export function FormWrapper({ children, log }) {
    return (
        <Wrapper $islogin={log}>
            {children}
        </Wrapper>
    )
}