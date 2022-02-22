// import React from 'reasct'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import FeedPage from "../pages/FeedPage/Feedpage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import ErroPage from "../pages/ErroPage/ErroPage";

const Router = () => {
    return(
        <div>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                
                    <Route path='/CadastroPage' element={<CadastroPage/>}/>

                    <Route path='/PostPage' element={<PostPage/>}/>

                    <Route path='/FeedPage' element={<FeedPage/>}/>

                    <Route path='/ErroPage' element={<ErroPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;
