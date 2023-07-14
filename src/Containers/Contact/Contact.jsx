import './Contact.css';
import { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RefsContext } from '../../Components/RefsProvider';

export default function Contact() {
	const form = useRef();
	const { contactRef } = useContext(RefsContext);

	function handleSubmit(e) {
		e.preventDefault();
		emailjs
			.sendForm('service_ye95lf2', 'template_p7yn7kq', form.current, 'H30h6c7uQGZwbr4CO')
			.then(
				(result) => {
					alert('Message sent');
					console.log('sent' + result.text);
				},
				(error) => {
					console.log('err' + error.text);
				}
			);
	}

	return (
		<section className='container contact-section' ref={contactRef}>
			<div className='contact-info'>
				<h2>Contact me</h2>
				<p className='contact-text'>
					Feel free to contact me any time. I will get back to you as soon as I can!
				</p>
				<div className='contact-info-info'>
					<h3>Email</h3>
					<p>alexissanmiguel03@gmail.com</p>
					<h3>Phone</h3>
					<p>+52 867 255 3978</p>
				</div>
				<ul className='social-links'>
					<li>
						<a href='https://github.com/alexisstdev' target='_blank'>
							<i className='fab fa-github' />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/alexisstdev/' target='_blank'>
							<i className='fab fa-linkedin' />
						</a>
					</li>
					<li>
						<a href='mailto:alexissanmiguel03@gmail.com'>
							<i className='far fa-envelope' />
						</a>
					</li>
				</ul>
			</div>
			<form className='contact-form' onSubmit={handleSubmit} ref={form}>
				<div className='form-group'>
					<input type='text' name='user_name' placeholder='Name' required />
					<input type='email' name='user_email' placeholder='Email' required />
				</div>
				<textarea name='message' placeholder='Message' required />
				<button type='submit'>Send</button>
			</form>
		</section>
	);
}
