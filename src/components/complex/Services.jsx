import SectionsTextHeader from '../minimal/SectionsTextHeader'
import taskIcon from "../../assets/task-icon.svg"
import calenderIcon from "../../assets/calendar-icon.svg"
import focusIcon from '../../assets/focus-icon.svg'
import notesIcon from "../../assets/notes-icon.svg"
import chatIcon from "../../assets/chat-icon.svg"
import ServiceCard from '../minimal/ServiceCard'

import '../../styles/Services.css'

const services = [
    {
        icon: taskIcon,
        number: 1,
        title: "Task Management",
        desc: "Create, prioritize, and track tasks effortlessly to stay on top of your day.",
        className: "task"
    },
    {
        icon: calenderIcon,
        number: 2,
        title: "Calendar Integration",
        desc: "Sync your schedules seamlessly and never miss important events.",
        className: "calender"
    },
    {
        icon: focusIcon,
        number: 3,
        title: "Focus Mode",
        desc: "Block distractions and zone in on what matters most.",
        className: "focus"
    },
    {
        icon: notesIcon,
        number: 4,
        title: "Notes & Document Storage",
        desc: "Keep your ideas and essential documents organized and accessible.",
        className: "notes"
    },
    {
        icon: chatIcon,
        number: 5,
        title: "AI Chatbot for Goal Planning",
        desc: "Get intelligent insights and personalized guidance to set and achieve, meaningful goals.",
        className: "chat"
    },

]

function Services() {
    return (
        <div className='services' id='services'>
            <SectionsTextHeader headingBlack="All You Need to" headingAccent="Stay Productive in One Powerful App" description="From task management to AI-powered goal planning, we've got the features to help you stay organized, focused, and efficient every step of the way." isDesciptionAvailable={true}
            />

            <div className="services-grid">

                {services.map((service) => {
                    return (
                        <ServiceCard service={service} key={service.number} />

                    )
                })}

            </div>
        </div>
    )
}

export default Services
