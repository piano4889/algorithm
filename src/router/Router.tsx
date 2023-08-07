import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "../component/pages/MainPage";
import AlgorithmPage from "../component/pages/AlgorithmPage";

const Router = () => {
    const location = useLocation();
    return (
        <Routes location={location}>
            <Route path={"/"} element={<MainPage/>}>
                <Route index element={<AlgorithmPage/>}/>
            </Route>
        </Routes>
    );
};

export default Router;