import './WorkDetails.css';
import { worksData } from '../../WorksData';
import { Link, useParams } from 'react-router-dom';

export default function WorkDetails({ goToRef, worksRef, homeRef }) {
  const { id } = useParams();
  const work = worksData.find((work) => work.id === parseInt(id));
  const nextWorkId = work.id < worksData.length ? work.id + 1 : 1;

  return (
    <div className='work-details container'>
      <p className='work-details-category'>Web development</p>
      <h1 className='work-details-name'>{work.name}</h1>
      <div className='work-details-nav'>
        <a onClick={() => goToRef(homeRef)}>Home&nbsp;&nbsp;&nbsp;</a>
        <span>
          &gt;
          <a onClick={() => goToRef(worksRef)}>
            &nbsp;&nbsp;&nbsp;Works&nbsp;&nbsp;&nbsp;
          </a>
          &gt;&nbsp;&nbsp;&nbsp;{work.name}
        </span>
      </div>
      <div className='work-details-description-container'>
        <p>{work.longDescription}</p>
        <div className='work-details-description-tags'>
          <h3>Technologies</h3>
          {work.tags.map((tag, index) => (
            <span key={index}>{tag}, </span>
          ))}
        </div>
      </div>
      <img src={work.image} alt='' />
      <img src={work.image} alt='' />
      <img src={work.image} alt='' />
      <img src={work.image} alt='' />
      <div className='work-details-controls'>
        <Link to={`/work/${nextWorkId}`}>Prev</Link>
      </div>
    </div>
  );
}
