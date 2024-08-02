import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute, { OnlyIfNotIdentified } from './components/PrivateRoute';
import Home from './pages/Home';
import LoginPage from "./pages/Login";
import Error from "./pages/Error";
import { ThemeProvider, UserProvider } from "./utils/context";
import GlobalStyle from "./utils/style/GlobalStyle";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <UserProvider>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/login" element={<OnlyIfNotIdentified />}>
                            <Route path="/login" element={<LoginPage />} />
                        </Route>
                        <Route path="/" element={<PrivateRoute />}>
                            <Route path='/' element={<Home />} />
                        </Route>
                        <Route path="*" element={<Error />} />
                    </Routes>
                </UserProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)