import React, { useState, useEffect } from 'react'

import { Styles } from "./styles"
import LogoPng from "../../../assets/img/logo.png"

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
                    <a style={Styles.navbarLink} href="#">Home</a>
                    <a style={ Styles.navbarLink } href="#">Sobre</a>
                </div>
            </div>
        </div>
    )
}