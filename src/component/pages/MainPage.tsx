import React from 'react';
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <header>
                <meta charSet={"UTF-8"}/>
                <title>알고리즘 테스트</title>
            </header>
            <Outlet/>
        </>
    );
};

export default MainPage;