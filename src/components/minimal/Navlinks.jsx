
import '../../styles/Navlinks.css'

function Navlinks({ links, style }) {
    return (
        <ul>
            {links.map((link, index) => {
                return (
                    <li key={index}><a href={link.url} style={style}>{link.link}</a></li>
                )
            })}
        </ul>
    )
}

export default Navlinks
