import styled from "styled-components"
import { Loader, LoaderWrapper } from "../../utils/style/Atoms";
import { useFetch } from "../../utils/hooks";
import { useContext } from "react";
import { PlanningContext } from "../../utils/context";

const Container = styled.div`
    padding:2rem;
`

const DetailContainer = styled.div`
    position:relative;
`

const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

export default function DayDetail({ selectedDate }) {
    const { planning } = useContext(PlanningContext)
    const { data, isLoading } = useFetch(`http://localhost:8000/plannings/${planning}?year=${selectedDate.getFullYear()}&month=${selectedDate.getMonth()}&day=${selectedDate.getDate()}`)
    const { planningDetail } = data
    const dayDetail = planningDetail

    return (
        <>
            {isLoading ?
                <>
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                </>
                :
                <>
                    {selectedDate ?
                        <Container>
                            <h2>D&eacute;tail du {selectedDate.getDate()}<sup>{selectedDate.getDate() === 1 ? "er" : ""}</sup> {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h2>
                            <DetailContainer>
                                {dayDetail && dayDetail.map(detail => <div key={detail._id}>{detail.title} {new Date(detail.timeStart).getHours() < 10 ? '0' : ''}{new Date(detail.timeStart).getHours()}:{new Date(detail.timeStart).getMinutes() < 10 ? '0' : ''}{new Date(detail.timeStart).getMinutes()}</div>)
                                }
                            </DetailContainer>
                        </Container>
                        :
                        <h2>S&eacute;lectionner une date pour en voir le d&eacute;tail</h2>
                    }
                </>
            }
        </>
    )
}