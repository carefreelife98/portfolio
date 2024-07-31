import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }: Props) {
    const Fade = require('react-reveal/Fade');
    return (
        <Fade duration={800} bottom>
            <a className={project.type === '실무 프로젝트' ? "project-card-main-disabled" : "project-card-main"}
               href={project.url}>
                <div className="inner">
                    <div className="card-image-box">
                        <img className="card-image"
                             src={`${process.env.PUBLIC_URL}/assets/image/project/${project.image}`}
                             alt='project-image'/>
                    </div>
                    <div className="card-title">
                        <p>{project.title}</p>
                    </div>
                    <div className="card-desc">
                        <p>{project.type}</p>
                    </div>
                    <div className="card-desc">
                        <p>{project.desc}</p>
                    </div>
                </div>
            </a>
        </Fade>
);
}

interface Props {
    project: {
        image: string,
        title: string,
        type: string,
        desc: string,
        url: string
    }
}
export default ProjectCard;