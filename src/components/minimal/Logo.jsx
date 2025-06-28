
import '../../styles/Logo.css'

function Logo({ imageAsset, imageName }) {
    return (
        <a href="/"><img src={imageAsset} alt={`${imageName} logo`} className='logo-image' /></a>
    )
}

export default Logo
