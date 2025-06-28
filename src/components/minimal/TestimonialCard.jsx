import "../../styles/TestimonialCard.css"

function TestimonialCard({ card }) {
    return (
        <div className="testimonial-card">
            <div className="heading-text">
                <h3 className="quote">{`"${card.quote}"`}</h3>
                <p className="message">{card.body}</p>
            </div>
            <div className="author">
                <img src={card.avatar} alt={`${card.name} testimonial message`} />
                <div className="author-details">
                    <p className="name">{card.name}</p>
                    <p className="job">{card.job}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
