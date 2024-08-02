import { useContext } from 'react';
import { ModalContext, PlanningContext } from '../../utils/context';
import styled from 'styled-components';

const OptionButton = styled.i`
    position:absolute;
    &:first-child{
        top:5px;
        right:5px;
    }
    &:last-child{
        bottom:5px;
        right:5px;
    }
    &:hover{
        color:var(--primary);
    }
`

export default function PlanningButton({ planningItem, setActionPlanning }) {
    const { setCurrentPlanning } = useContext(PlanningContext)
    const { setOpenModal } = useContext(ModalContext)

    const handleSelectPlanning = (e) => {
        setCurrentPlanning(e.target.dataset.id)
    }

    const handleUpdatePlanning = (planningItem) => {
        setActionPlanning(planningItem)
        setOpenModal(true)
    }

    const handleDeletePlanning = (planningId) => {
        console.log('delete', planningId)
    }
    return (
        <button className={localStorage.getItem('planningId') !== null && planningItem._id === Number(localStorage.getItem('planningId')) ? "active" : ""} onClick={handleSelectPlanning} data-id={planningItem._id}>
            {planningItem.title}
            <OptionButton className="fa-solid fa-pen-to-square" onClick={(e) => handleUpdatePlanning(planningItem)} data-id={planningItem._id} />
            <OptionButton className="fa-solid fa-trash" onClick={(e) => handleDeletePlanning(planningItem._id)} data-id={planningItem._id} />
        </button>
    )
}