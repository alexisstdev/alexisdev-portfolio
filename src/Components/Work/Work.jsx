import './Work.css';
import { Link } from 'react-router-dom';

export default function Work({ workData }) {
  function handleClick() {
    window.location.hash = '';
  }
  return (
    <div className='work-item'>
      <Link to={`work/${workData.id}`} onClick={handleClick}>
        <img src={workData.image} alt={workData.name} className='work-image' />
        <div className='work-overlay'>
          <h3>{workData.name}</h3>
          <p>{workData.description}</p>
          <ul className='work-tags'>
            {workData.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}
