import { useContext } from "react"
import { ModalContext } from "../../utils/context"

export default function AddPlanning({ setActionPlanning }) {
    const { setOpenModal } = useContext(ModalContext)
    const handleClick = () => {
        setActionPlanning({})
        setOpenModal(true)
    }
    return (
        <button onClick={handleClick}>Nouveau planning</button>
    )
}