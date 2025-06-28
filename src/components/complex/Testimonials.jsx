import john from '../../assets/John-avatar.png'
import jane from '../../assets/Jane-avatar.png'
import micheal from '../../assets/Michael-avatar.png'
import SectionsTextHeader from '../minimal/SectionsTextHeader'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import '../../styles/Testimonials.css'
import TestimonialCard from '../minimal/TestimonialCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const testominials = [
    {
        quote: "Essential to my daily routine.",
        body: "Managing tasks and tracking goals for my business has never been easier. The app's intuitive features and seamless document storage have become essential to my daily routine.",
        avatar: john,
        name: "John L.",
        job: "Small Business Owner"
    },
    {
        quote: "Helps me achieve my goals.",
        body: "This app has completely transformed the way I organize my work and life. The AI goal planning feature keeps me focused, and the task management tool is a game-changer. Highly recommended!",
        avatar: jane,
        name: "Jabe A.",
        job: "Marketing Manager"
    },
    {
        quote: "Helps me meet deadlines.",
        body: "I've tried countless productivity apps, but none come close to this one. The focus mode and calendar integration help me meet tight deadlines without missing a beat. I highly recommend using this app.",
        avatar: micheal,
        name: "Micheal T.",
        job: "Freelance Developer"
    }
]

function Testimonials() {
    return (
        <div className='testimonials'>
            <SectionsTextHeader headingBlack="Hear what" headingAccent="our customers say " description="Don’t take our word for it. Hear what our verified users from different companies have to say about our product." isDesciptionAvailable={true} />

            {/* swiper slider */}

            <div className="slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: true
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {/* looping through cards and passing each card into  */}
                    {testominials.map((card) => (
                        <SwiperSlide>
                            <TestimonialCard card={card} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </div>
    )
}

export default Testimonials
