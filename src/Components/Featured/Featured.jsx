import { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './featured.scss';

export const Featured = () => {
	const [currSlide, setCurrSlide] = useState(0);
	const projects = [
		{
			id: '0',
			title: 'Random Meal Generator',
			github: 'https://github.com/huirayj/random-meal-generator',
			role: 'Front-end (DOM, Javascript).',
			desc: "An HTML/CSS site that uses TheMealDB and TheCocktailDB API's to create a random pairing of recipes of each.",
			img: `${process.env.PUBLIC_URL}/assets/images/Featured/random-meal-generator.jpg`,
			alt: 'Random meal generator site',
			deployed: 'https://huirayj.github.io/random-meal-generator/',
		},
		{
			id: '1',
			title: 'Forum Friends',
			github: 'https://github.com/huirayj/forum-friends',
			role: "Back-end (Models, Schemas, RESTful Routes).",
			desc: 'A messaging site made with Handlebars.js, Sequelize, and Express server.',
			img: `${process.env.PUBLIC_URL}/assets/images/Featured/forum-friends.png`,
			alt: 'Forum Friends site',
			deployed: 'https://forum-friends.herokuapp.com/',
		},
		{
			id: '2',
			title: 'PostGrubDash',
			github: 'https://github.com/b00000001/PostGrubDash',
			desc: 'A MERN stack site that utlizes the Stripe payment API.',
			role: 'Back-end (Models, Schemas). Front-end (React Components and Pages).',
			img: `${process.env.PUBLIC_URL}/assets/images/Featured/postgrubdash.jpg`,
			alt: 'PostGrubDash demo',
			deployed: 'https://postgrubdash.herokuapp.com/',
		},
		{
			id: '3',
			title: 'TBD',
			github: 'https://github.com/huirayj',
			desc: 'Work In Progress.',
			role: 'TBD',
			img: `${process.env.PUBLIC_URL}/assets/images/Featured/work-in-progress.jpg`,
			alt: 'Work in Progress.',
			deployed: 'https://github.com/huirayj',
		},
	];

	const handleClick = (dir) => {
		dir === 'right'
			? setCurrSlide(currSlide < projects.length - 1 ? currSlide + 1 : 0)
			: setCurrSlide(currSlide > 0 ? currSlide - 1 : 2);
	};

	return (
		<div className='featured' id='featured'>
			<div
				className='slider'
				style={{ transform: `translateX(-${currSlide * 100}vw)` }}
			>
				{projects.map(({id, github, title, role, desc, deployed, img, alt}) => (
					<div className='container' key={id}>
						<div className='item'>
							<div className='left'>
								<div className='leftContainer'>
									<a href={github} target='_blank' rel='noopener noreferrer'>
										<h2>{title}</h2>
									</a>
									<p>{desc}</p>
									<p>Role: {role}</p>
								</div>
							</div>
							<div className='right'>
								<a href={deployed} target='_blank' rel='noopener noreferrer'>
									<img src={img} alt={alt} />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="iconContainer">
				<ChevronLeftIcon className='icon left' onClick={() => handleClick()} />
				<ChevronRightIcon
					className='icon right'
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};

export default Featured;
