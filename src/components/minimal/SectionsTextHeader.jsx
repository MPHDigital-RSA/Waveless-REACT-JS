import '../../styles/SectionsTextHeader.css'

function SectionsTextHeader({ headingBlack, headingAccent, description, isDesciptionAvailable }) {
    return (
        <div className='header-text container'>
            <h2>{headingBlack} <span>{headingAccent}</span></h2>
            {
                isDesciptionAvailable && <p>{description}</p>
            }
        </div>
    )
}

export default SectionsTextHeader
