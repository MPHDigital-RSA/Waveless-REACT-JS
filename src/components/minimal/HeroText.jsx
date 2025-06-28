import '../../styles/HeroText.css'
import googlePlay from '../../assets/Google-play-button.svg'
import appStore from '../../assets/App-store-button.svg'

function HeroText() {
    return (
        <div className='hero-text'>
            <h1>Take Control of Your Time and <span>Achieve Your Biggest Goals</span>
            </h1>
            <p>Stay ahead with a powerful productivity app designed to help you manage tasks, plan your schedule, and stay focused. Boost your efficiency with AI-driven goal planning, calendar integration, and seamless note storage.
            </p>

            <div className="hero-buttons">
                <a href="#">
                    <img src={googlePlay} alt="google play image link" />
                </a>
                <a href="#">
                    <img src={appStore} alt="app store image link" />
                </a>
            </div>
        </div>
    )
}

export default HeroText
