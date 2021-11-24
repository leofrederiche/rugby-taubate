import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import { Styles } from "./styles"
import LogoPng from "../../../assets/img/logo.jpg"

export const NavbarDesktop = () => {
    return (
        <div>
            <div style={ Styles.navbar }>
                {/* Left side */}
                <div style={ Styles.leftSide } >
                    <img style={ Styles.logo } src={ LogoPng } />
                    <h1 style={ Styles.title } >Taubaté Rugby</h1>
                </div>

                {/* Right side */}
                <div style={ Styles.rightSide }>                    
                    <Link style={Styles.navbarLink} to="/">Home</Link>
                    <Link style={ Styles.navbarLink } to="/sobre">Sobre</Link>
                </div>
            </div>
        </div>
    )
}