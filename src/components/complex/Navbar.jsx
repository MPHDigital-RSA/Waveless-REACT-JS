

import Button from "../minimal/Button"
import Logo from "../minimal/Logo"

import headerLogo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu.svg'
import Navlinks from "../minimal/Navlinks"

import '../../styles/Navbar.css'
import { useState } from "react"
import MobileMenu from "../minimal/MobileMenu"

// header links and their urls
const headerLinks = [
    {
        link: "Home",
        url: "#"
    },
    {
        link: "Features",
        url: "#services"
    },
    {
        link: "Reviews",
        url: "#"
    }
]

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="container header">
                <Logo imageAsset={headerLogo} imageName="header" />
                <nav className="desktopNav">
                    <Navlinks links={headerLinks} style={{ color: "black" }} />
                </nav>
                <div className="header-buttons">
                    <Button buttonText="Download Now" buttonUrl="#" />
                    <img src={menuIcon} alt="menu icon" className="menu-icon" onClick={() => {
                        setIsMenuOpen(true)
                    }} />
                </div>

                {
                    isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} headerLinks={headerLinks} />
                }
            </div>
        </header>
    )
}

export default Navbar
