import React from "react";
import {Routes, Route} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
//Components
import {lightTheme} from "./Components/Styled-Components/Themes";

import Posts from "./Pages/Posts/Posts";
import Comments from "./Pages/Comments/Comments";
import CommentMore from "./Pages/Comments/CommentMore";
import Photos from "./Pages/Photos/Photos";
import Todos from "./Pages/Todos/Todos";
import Users from "./Pages/Users/Users";
import MoreUser from './Pages/Users/MoreUser';
// import Register from "./Pages/Register/Register";
//Layouts
import MainLayout from "./Layout/MainLayout";

const App = () => {

    return(
        <ThemeProvider theme={lightTheme }>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Posts />} />
                        <Route path='comments/:id' element={<CommentMore />} />
                        <Route path='comments' element={<Comments />} />
                        <Route path='photos' element={<Photos />} />
                        <Route path='todos' element={<Todos />} />
                        <Route path='users/:id' element={<MoreUser />} />
                        <Route path='users' element={<Users />} />
                        {/*<Route path='register' element={<Register />} />*/}
                    </Route>
                </Routes>
        </ThemeProvider>
    )
}
export default App