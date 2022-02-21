import React from "react";
import Home from "./pages/Home";
import ListaDeViagens from "./pages/ListaDeViagens";
import InscrevaSe from "./pages/InscrevaSe";
import Login from "./pages/Login";
import PainelAdm from "./pages/PainelAdm";
import CriarViagens from "./pages/CriarViagens";
import Detalhes from "./pages/Detalhes";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () =>{
    return(
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/ListaDeViagens" element = {<ListaDeViagens/>}/>
          <Route path="/InscrevaSe" element = {<InscrevaSe/>}/>
          <Route path="/Login" element = {<Login/>}/>
          <Route path="/PainelAdm" element = {<PainelAdm/>}/>
          <Route path="/CriarViagens" element = {<CriarViagens/>}/>
          <Route path="/Detalhes" element = {<Detalhes/>}/>
        </Routes>
      </Router>
    )
  }
  export default App;