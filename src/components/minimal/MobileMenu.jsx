import exitBtn from '../../assets/close.svg'
import '../../styles/MobileMenu.css'

function MobileMenu({ setIsMenuOpen, headerLinks }) {
    return (
        <div className='mobile-menu'>
            <img src={exitBtn} alt="close icon" onClick={() => {
                setIsMenuOpen(false);
            }} className='close-button' />
            <nav>
                {headerLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <a href={link.url} onClick={() => {
                                setIsMenuOpen(false)
                            }}>{link.link}</a>
                        </li>
                    )
                })}
            </nav>
        </div>
    )
}

export default MobileMenu
