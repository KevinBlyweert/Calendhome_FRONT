import { useContext } from "react"
import styled from "styled-components"
import { ModalContext } from "../../utils/context"

const Overlay = styled.div`
    width:100vw;
    height:100vh;
    backdrop-filter:blur(6px);
    position:absolute;
    z-index:15;
`
const ModalContainer = styled.div`
    position:absolute;
    padding:1rem;
    width:clamp(22rem, 10vw + 19.5rem, 30rem);
    // height:clamp(5rem, 1.25vw + 4.6875rem, 6rem);
    transform:translateX(-50%);
    left:50%;
    top:3rem;
    background-color:white;
    z-index:16;
    border-radius:5rem 0 5rem 0;
    border:2px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    color:var(--font-color-lightmode);
    flex-direction:column;
`

const SubmitButton = styled.button`

`

export default function Modal({ actionPlanning }) {
    const { openModal, setOpenModal } = useContext(ModalContext)
    const closeModal = () => setOpenModal(false)
    const handleSubmit = () => {
        actionPlanning._id ? updatePlanning() : createPlanning()
        setOpenModal(false)
    }
    const createPlanning = () => {
        console.log('created!');
    }
    const updatePlanning = () => {
        console.log('updated!');
    }
    return (
        openModal && <>
            <Overlay onClick={closeModal} />
            <ModalContainer>
                <h2>{actionPlanning._id ? "Modifier" : "Créer"}</h2>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                    <label htmlFor="title" style={{ float: 'left', textAlign: 'right' }}>Nom du planning</label>
                    <input type="text" name="title" id="title" defaultValue={actionPlanning?.title} style={{ width: '100%' }} />
                    <SubmitButton type="submit" onClick={handleSubmit} ><i className="fa-solid fa-check"></i></SubmitButton>
                </form>
            </ModalContainer>
        </>
    )
}