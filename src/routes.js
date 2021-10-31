import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Navbar } from "./components/navbar"
//import Usuario from "./Usuario"

const Routes = () => {
   return(
       <div style={{ paddingTop: 95 }}>
        <Navbar />
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { About } path="/sobre" />
        </BrowserRouter>
       </div>
   )
}

export default Routes;