import React from 'react';
import './Hello.css';
import { greeting } from '../../portfolio';
import Social from '../Social/Social';

function Hello() {
	const Fade = require('react-reveal/Fade')
	return (
		<section className="section--hello">
			<div className="inner">
				<Fade bottom duration={800}>
					<div className="wrapper">
						<div className="text-title">
							{greeting.title}&nbsp;
							<span className="hello-emoji">👋</span>
						</div>
						<div className="role">
							<img className="hello-image"
								 src={`${process.env.PUBLIC_URL}/assets/image/profile/${greeting.image}`}
								 alt='hello-image'/>&nbsp;
						</div>
						<div className="role">
							<span>{greeting.role}</span>
						</div>
						<div className="text-subtitle">
							<span>{greeting.subTitle}</span>
						</div>
						<div className="social-links">
							<Social/>
						</div>
						<div className="wrapper-links">
							<a href="#contact" id="about">Contact &gt;</a>
							<a href={greeting.resumeLink} id="resume" target="_blank" rel="noopener noreferrer">View Resume &gt;</a>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
}

export default Hello;