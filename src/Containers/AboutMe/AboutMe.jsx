import useScrollToRef from '../../Hooks/useScrollToRef';
import { forwardRef, useContext } from 'react';
import { RefsContext } from '../../Components/RefsProvider';
import './AboutMe.css';

function AboutMe() {
	const { goToRef } = useScrollToRef();
	const { contactRef, aboutMeRef } = useContext(RefsContext);

	return (
		<section className='aboutme-container container' ref={aboutMeRef} id='home'>
			<div className='aboutme-content'>
				<img src='me.jpg' alt='alexis-image' />
				<div className='aboutme-info'>
					<h1>
						Hi, I'm <span>Alexis</span>
					</h1>
					<h2 className='aboutme-title'>Software Developer</h2>
					<p className='aboutme-description'>
						Deeply passionate about creating user experiences and web applications.
						Dedicated to delivering exceptional results and committed to maintaining
						meticulous attention to detail in all my works.
					</p>
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
					</ul>
					<footer className='aboutme-buttons'>
						<a
							href='https://drive.google.com/file/d/1b8K0LEv_PwUaNEd-fPjfQHmAgZDDHzZ7/view?usp=sharing'
							target='_blank'
							type='button'
							className='btn btn-primary'
						>
							View resume
						</a>
						<button className='btn btn-secondary' onClick={() => goToRef(contactRef)}>
							Contact
						</button>
					</footer>
				</div>
			</div>
		</section>
	);
}

export default forwardRef(AboutMe);
