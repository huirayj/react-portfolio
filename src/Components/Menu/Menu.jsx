import React from 'react';
import './menu.scss';

export const Menu = ({ menuState, setMenuState, currPage, setCurrPage }) => (
	<div className={`menu ${menuState && 'active'}`}>
		<ul>
			<li
				className={currPage === 'hero' ? 'active' : ''}
				onClick={() => {
					setMenuState(false);
					setCurrPage('hero');
				}}
			>
				<a href='#hero'>Home</a>
			</li>
      <li
				className={currPage === 'about' ? 'active' : ''}
				onClick={() => {
					setMenuState(false);
					setCurrPage('about');
				}}
			>
				<a href='#about'>About Me</a>
			</li>
			<li
				className={currPage === 'featured' ? 'active' : ''}
				onClick={() => {
					setMenuState(false);
					setCurrPage('featured');
				}}
			>
				<a href='#featured'>Featured</a>
			</li>
			<li
				className={currPage === 'portfolio' ? 'active' : ''}
				onClick={() => {
					setMenuState(false);
					setCurrPage('portfolio');
				}}
			>
				<a href='#portfolio'>Portfolio</a>
			</li>
			<li
				className={currPage === 'resume' ? 'active' : ''}
				onClick={() => {
					setMenuState(false);
					setCurrPage('resume');
				}}
			>
				<a href='#resume'>Skills & Resume</a>
			</li>
			<li
				className={currPage === 'contact' ? 'active' : ''}
				onClick={() => {
					setMenuState(false);
					setCurrPage('contact');
				}}
			>
				<a href='#contact'>Contact</a>
			</li>
		</ul>
	</div>
);

export default Menu;
