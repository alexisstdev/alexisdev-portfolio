import { FaExternalLinkAlt } from 'react-icons/fa';
import './Work.css';
import { Link } from 'react-router-dom';

export default function Work({ workData }) {
	return (
		<article className='work-item'>
			<Link to={`work/${workData.path}`} onClick={() => window.scrollTo(0, 0)}>
				<img src={workData.preview} alt={workData.name} className='work-image' />
				<div className='work-overlay'>
					<h3>{workData.name}</h3>
					<p>{workData.description}</p>
					<ul className='work-tags'>
						{workData.tags.map((tag, index) => (
							<li key={index}>{tag}</li>
						))}
					</ul>
					<div className='view-details'>
						See details
						<FaExternalLinkAlt size={14} />
					</div>
				</div>
			</Link>
		</article>
	);
}
