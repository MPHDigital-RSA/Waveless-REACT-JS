import '../../styles/ServiceCard.css'

function ServiceCard({ service }) {
    return (
        <div className={`${service.className} service-card`}>
            <div className="service-card-text">
                <p className="service-number">{service.number}</p>
                <h3 className='service-title'>{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
            </div>
            <img src={service.icon} alt="" className="service-icon" />
        </div>
    )
}

export default ServiceCard
