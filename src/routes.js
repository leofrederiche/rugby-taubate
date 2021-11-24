import React from "react"
import { Route, BrowserRouter } from "react-router-dom"

import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
//import Usuario from "./Usuario"

const Routes = () => {
   return(
       <div style={{ paddingTop: 95 }}>
        <BrowserRouter>
            <Navbar />

            <Route component = { Home }  path="/" exact />
            <Route component = { About } path="/sobre" />
        </BrowserRouter>
        <Footer />
       </div>
   )
}

export default Routes;