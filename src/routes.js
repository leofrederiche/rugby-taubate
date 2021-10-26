import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

import { Home } from "./pages/home"
import { About } from "./pages/about"
//import Usuario from "./Usuario"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { About } path="/sobre" />
       </BrowserRouter>
   )
}

export default Routes;