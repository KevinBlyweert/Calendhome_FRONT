import SideBar from "../SideBar";
import styled from "styled-components";
import Calendar from "../Calendar";
import { useContext, useState } from "react";
import { PlanningContext } from "../../utils/context";
import NotFound from "../NotFound";
import DayDetail from '../DayDetail';

const MainContainer = styled.main`
    position:relative;
    flex-grow:1;
    padding:2rem clamp(.5rem, .3rem + 5vw, 3rem);
`

const PlanningContainer = styled.div`
    height:100%;
`

export default function Main({ setActionPlanning }) {
    const { planning } = useContext(PlanningContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [monthDetail, setMonthDetail] = useState([])
    return (
        <MainContainer>
            <SideBar setActionPlanning={setActionPlanning}/>
            {planning ?
                <PlanningContainer>
                    <Calendar getSelectedDate={{ selectedDate, setSelectedDate }} />
                    <DayDetail selectedDate={selectedDate} monthDetail={{ monthDetail, setMonthDetail }} />
                </PlanningContainer>
                :
                <NotFound setActionPlanning={setActionPlanning}/>
            }
        </MainContainer>
    )
}