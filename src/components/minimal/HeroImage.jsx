import '../../styles/HeroImage.css'

// images
import orangeRect from '../../assets/Orange-rectangle.svg'
import phone from '../../assets/Mobile-phone-hero.png'


function HeroImage() {
    return (
        <div className='hero-image'>
            <img src={orangeRect} alt="" className='orange-rect' />
            <img src={phone} alt="" className='phone' />
        </div>
    )
}

export default HeroImage
