import { useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Modal from "../../components/Modal";
import { ModalProvider, PlanningProvider } from "../../utils/context";

export default function Home() {
    const [actionPlanning, setActionPlanning] = useState({})
    return (
        <>
            <Header />
            <PlanningProvider>
                <ModalProvider>
                    <Main setActionPlanning={setActionPlanning} />
                    <Modal actionPlanning={actionPlanning} />
                </ModalProvider>
            </PlanningProvider>
        </>
    )
}