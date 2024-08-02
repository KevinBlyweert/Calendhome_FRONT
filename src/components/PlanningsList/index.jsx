import styled from "styled-components";
import { useFetch } from '../../utils/hooks'
import { Loader, LoaderWrapper } from "../../utils/style/Atoms";
import AddPlanning from "../AddPlanning";
import PlanningButton from "../PlanningButton";
import { useContext, useEffect } from "react";
import { PlanningContext } from "../../utils/context";


const PlanningsContainer = styled.div`
    flex-grow:1;
    padding-top:1rem;
    display:flex;
    flex-direction:column;
    gap:.5rem;
    & button{
        position:relative;
        color:var(--font-color-darkmode);
        background-color:var(--primary);
        border:none;
        cursor:pointer;
        width:100%;
        height:3rem;
        border-radius:5px;
        &.active,&:hover{
            background-color:var(--secondary);
            font-weight:bold;
        }
            &:last-child{
                margin-top:2rem;
            }
    }
`

export default function PlaninngsList({ setActionPlanning }) {
    const { planning, setCurrentPlanning } = useContext(PlanningContext)
    const { data, isLoading } = useFetch('http://localhost:8000/plannings')
    const { plannings } = data

    useEffect(() => { if (plannings && !planning) { setCurrentPlanning(plannings[0]._id) } })

    return (
        <>
            {isLoading ?
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
                :
                (
                    <PlanningsContainer>
                        {plannings?.map(planningItem => <PlanningButton key={planningItem._id} planningItem={planningItem} setActionPlanning={setActionPlanning} />)}
                        <AddPlanning setActionPlanning={setActionPlanning} />
                    </PlanningsContainer>
                )
            }
        </>
    )
}