import React from 'react';
import './about.scss';

export const About = () => {
	return (
		<div className='about' id='about'>
			<div className='aboutContainer'>
				<h1>About Me</h1>
				<p>
					I'm a North Carolina native who first became interested in web
					development when stumbling upon the freeCodeCamp site. For a year or
					so, I casually learned about the basic concepts of HTML, CSS, and
					JavaScript. Most of my time, there, was spent practicing JavaScript
					and solving algorithms. I soon became more serious about pursing a
					career in web development and decided to enroll in a coding bootcamp.
				</p>
				<p>
					Recently, I was certified by a Trilogy Full Stack Bootcamp through the
					University of North Carolina at Charlotte and was able to develop a
					greater understanding of the process. More importantly, I had the
					opportunity to be guided by an industry veteran and to work alongside
					other passionate individuals through assignments and group projects.
				</p>
				<p>
					As of now, I continue to enjoy striving toward efficient code
					and searching for ways to improve my coding abilities and productivity.
				</p>
				<p>
					In my free time, I enjoy looking at tech gadgets and PC parts, reading
					comics, playing video games, and cooking.
				</p>
			</div>
		</div>
	);
};

export default About;
