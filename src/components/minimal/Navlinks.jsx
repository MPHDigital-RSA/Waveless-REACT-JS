
import '../../styles/Navlinks.css'

function Navlinks({ links }) {
    return (
        <ul>
            {links.map((link, index) => {
                return (
                    <li key={index}><a href={link.url}>{link.link}</a></li>
                )
            })}
        </ul>
    )
}

export default Navlinks
