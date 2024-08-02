import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage?.getItem('token'))

    const addToken = (token) => {
        sessionStorage.setItem('token', token)
        setToken(token)
    }
    return (
        <UserContext.Provider value={{ token, addToken }}>
            {children}
        </UserContext.Provider>
    )
}

export const PlanningContext = createContext()
export const PlanningProvider = ({ children }) => {
    const [planning, setPlanning] = useState(localStorage.getItem('planningId') ? localStorage.getItem('planningId') : null)

    const setCurrentPlanning = (planningId) => {
        localStorage.setItem('planningId', planningId)
        setPlanning(planningId)
    }
    return <PlanningContext.Provider value={{ planning, setCurrentPlanning }}>
        {children}
    </PlanningContext.Provider>
}

export const ModalContext = createContext()
export const ModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)

    return <ModalContext.Provider value={{ openModal, setOpenModal }}>
        {children}
    </ModalContext.Provider>
}