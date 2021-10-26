import React, { useState, useEffect } from 'react'

import { Styles } from "./styles"
import LogoPng from "../../../assets/img/logo.png"

export const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(true)

    const handleMenuOptions = () => {
        if (menuOpen) {
            return (
                <div style={ Styles.menuContainer }>
                    <a style={ Styles.navbarLink } href="#">Home</a>
                    <a style={ Styles.navbarLink } href="#">Sobre Alguém</a>
                </div>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <div>
            <div style={ Styles.navbar }>
                {/* Left side */}
                <div style={ Styles.leftSide } >
                    <img style={ Styles.logo } src={ LogoPng } />
                </div>

                {/* Right side */}
                <div style={ Styles.rightSide }>
                    <button 
                        onClick={ () => setMenuOpen(!menuOpen) }
                        style={ Styles.menu }
                    >
                        { menuOpen ? "X" : "=" }
                    </button>
                    
                    {
                        handleMenuOptions()
                    }
                    
                </div>
            </div>
        </div>
    )
}