import React from 'react'

import { NavbarDesktop } from "./desktop/"
import { NavbarMobile } from "./mobile/"

export const Navbar = () => {
    if (window.innerWidth < 1024) {
        return <NavbarMobile />
    } else {
        return <NavbarDesktop />
    }
}