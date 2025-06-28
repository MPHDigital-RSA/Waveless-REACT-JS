import footerLogo from '../../assets/logo-white.svg'
import Logo from '../minimal/Logo'
import '../../styles/Footer.css'
import Navlinks from '../minimal/Navlinks'
import Socials from '../minimal/Socials'

const footerLinks = [
    {
        link: "FAQ",
        url: "#"
    },
    {
        link: "Terms & Conditions",
        url: "#"
    },
    {
        link: "Careers",
        url: "#"
    },
    {
        link: "Contact Us",
        url: "#"
    },
    {
        link: "Privacy Policy",
        url: "#"
    },
]

const styles = {
    color: "white",
}

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <Logo imageAsset={footerLogo} imageName="footer" />

                <Navlinks links={footerLinks} style={styles} />

                <Socials />
            </div>
        </div>
    )
}

export default Footer
