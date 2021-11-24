import React, { useState, useEffect } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5';
import { Link } from "react-router-dom"

import { Styles } from "./styles"
import LogoPng from "../../../assets/img/logo.jpg"
import {} from "./styles.css"

export const NavbarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuStyle, setMenuStyle] = useState("menuClose") // menuClose || menuOpen

   useEffect(() => {
       menuOpen ? setMenuStyle("menuOpen") : setMenuStyle("menuClose")
   }, [menuOpen])

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
                        { 
                            menuOpen ? <IoClose /> : <IoMenu /> 
                        }
                    </button>
                    
                    <div className={ menuStyle } style={ Styles.menuContainer }>
                        <Link onClick={ () => setMenuOpen(!menuOpen) } style={ Styles.navbarLink } to="/">Home</Link>
                        <Link onClick={ () => setMenuOpen(!menuOpen) } style={ Styles.navbarLink } to="/sobre">Sobre</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}