import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";

export const AppRouter : FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
        </Routes>
    )
}