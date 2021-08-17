import { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import SchoolIcon from '@material-ui/icons/School';
import emailjs from 'emailjs-com';
import './contact.scss';

export const Contact = () => {
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [messageInput, setMessageInput] = useState('');
	const [errorMessage, setErrorMessage] = useState([]);

	const handleChange = (e) => {
		if (e.target.name === 'name') {
			setNameInput(e.target.value);
		}
		if (e.target.name === 'email') {
			setEmailInput(e.target.value);
		}
		if (e.target.name === 'message') {
			setMessageInput(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!nameInput) setErrorMessage('Name was empty.');
		if (!emailInput) setErrorMessage('Email was empty.');
		if (!messageInput) setErrorMessage('Message was empty.');
		if (!nameInput && !emailInput)
			setErrorMessage('Name and Email were empty.');
		if (!nameInput && !messageInput)
			setErrorMessage('Name and Message were empty.');
		if (!emailInput && !messageInput)
			setErrorMessage('Email and Message were empty.');
		if (!nameInput && !emailInput && !messageInput)
			setErrorMessage('Form was empty.');

		if (nameInput && emailInput && messageInput) {
			emailjs
				.sendForm(
					'service_lb6s0ud',
					'default_template',
					e.target,
					'user_gJ2nynJ0taEWDWivwO58l'
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);

            setErrorMessage('Thank you very much. Your message has been sent.')
		}

		setNameInput('');
		setEmailInput('');
		setMessageInput('');
	};

	const emailValidation = (email) => {
		const regex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		return regex.test(email);
	};

	return (
		<div className='contact' id='contact'>
			<div className='top'>
				<h2>Let's Talk</h2>
				<form onSubmit={handleSubmit}>
					<input
						className='input'
						name='name'
						type='text'
						placeholder='Name'
						spellCheck='false'
						value={nameInput}
						onChange={handleChange}
					/>
					<input
						className={`input ${
							emailInput.length && !emailValidation(emailInput) ? 'error' : ''
						}`}
						name='email'
						type='text'
						label='Email'
						placeholder='Email'
						spellCheck='false'
						value={emailInput}
						onChange={handleChange}
					/>
					<textarea
						className='textarea'
						placeholder='Message'
						name='message'
						value={messageInput}
						onChange={handleChange}
					/>
					<button type='submit'>Send</button>
				</form>
				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
			</div>
			<div className='bottom'>
				<div className='iconContainer'>
					<a href='https://github.com/huirayj' target='_blank' rel='noreferrer'>
						<GitHubIcon className='icon' />
					</a>
					<a
						href='mailto:huirayj@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<MailOutlineIcon className='icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/huirayj/'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedInIcon className='icon' />
					</a>
					<a
						href='https://leetcode.com/huirayj/'
						target='_blank'
						rel='noreferrer'
					>
						<CodeIcon className='icon' />
					</a>
					<a
						href='https://www.freecodecamp.org/fcc362dd55e-8a8d-43a9-a582-7182af74dbd2'
						target='_blank'
						rel='noreferrer'
					>
						<SchoolIcon className='icon' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
