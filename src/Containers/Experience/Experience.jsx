import './Experience.css';
import { forwardRef } from 'react';

function Experience({ props }, ref) {
	return (
		<section className='container' ref={ref}>
			<h2 className='section-header'>Work experience</h2>

			<article className='experience'>
				<div className='experience-title'>
					<h1>Junior Developer</h1>
					<p className='company'>Aduasis Logistica</p>
					<p className='time'>2023 - Present</p>
				</div>
				<div className='experience-details'>
					<p>
						Modify existing software developed in PowerBuilder to fix errors and optimize
						efficiency. Add new features, modules and functionalities. Generate detailed
						reports to document software changes and progress. Store, retrieve, and
						manipulate data from Microsoft SQL Server database.
					</p>
					<h3 className='experience-tech'>Tech Stack</h3>
					<p>Powerbuilder, Microsoft SQL Server.</p>
					<hr />
				</div>
			</article>
		</section>
	);
}

export default forwardRef(Experience);
