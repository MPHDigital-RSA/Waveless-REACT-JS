import '../../styles/Hero.css'
import HeroText from '../minimal/HeroText'
import HeroImage from '../minimal/HeroImage'

function Hero() {
    return (
        <div className='container hero'>
            <HeroText />
            <HeroImage />
        </div>
    )
}

export default Hero
