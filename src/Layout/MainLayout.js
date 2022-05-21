import React from "react";
import {Outlet} from "react-router-dom";

import Navbar from '../Components/Navbar/Navbar'
import {Container} from "../Components/Styled-Components/Style";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Outlet/>
            </Container>
        </div>
    )
}
export default MainLayout