import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/Instagram.png'
import github from '../../assets/Github.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/LinkedIn.png'

import Button from './Button'
import '../../styles/Socials.css'

const socials = [
    {
        icon: facebook,
        url: "#",
    },
    {
        icon: instagram,
        url: "#",
    },
    {
        icon: github,
        url: "#",
    },
    {
        icon: twitter,
        url: "#",
    },
    {
        icon: linkedin,
        url: "#",
    },
]

function Socials() {
    return (
        <div className='socials'>
            {
                socials.map((social, index) => (
                    <img src={social.icon} alt={`${social.icon} icon`} key={index} />
                ))
            }

            <Button buttonText="Download Now" buttonUrl="#" />
        </div>
    )
}

export default Socials
