
import '../../styles/Button.css'

function Button({ buttonUrl, buttonText }) {
    return (
        <a href={buttonUrl}>
            <button>{buttonText}</button>
        </a>
    )
}

export default Button
