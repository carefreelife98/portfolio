import React from 'react';
import './ExpCard.css';

function ExpCard({ experience }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
        <div className="expcard-main">
            <div className="inner">

                <img className="expcard-company-image" src={`/assets/image/company/${experience.image}`} alt='company-image'></img>
                <div className="expcard-company">
                    {experience.company}
                </div>
                <div className="expcard-role">
                    {experience.role}
                </div>
                <div className="expcard-date">
                    {experience.date}
                </div>

            </div>
        </div>
        </Fade>
    );
}

interface Props {
    experience: {
        image: string,
        company: string,
        role: string,
        date: string | number
    }
}
export default ExpCard;