import './WorkDetails.css';
import { worksData } from '../../WorksData';
import { Link, useParams } from 'react-router-dom';
import NotFound from '../../Components/NotFound';

export default function WorkDetails({ goToRef, worksRef, homeRef }) {
  const { path } = useParams();
  const workIndex = worksData.findIndex((work) => work.path === path);
  const work = worksData[workIndex];

  if (workIndex === -1) {
    return <NotFound />;
  }

  const nextWorkIndex = (workIndex + 1) % worksData.length;
  const prevWorkIndex = (workIndex - 1 + worksData.length) % worksData.length;
  const nextWork = worksData[nextWorkIndex].path;
  const prevWork = worksData[prevWorkIndex].path;

  return (
    <div className='work-details container'>
      <p className='work-details-category'>{work.category}</p>
      <h1 className='work-details-name'>
        <a href={work.live} target='_blank'>
          {work.name}
        </a>
      </h1>
      <div className='work-details-nav'>
        <a onClick={() => goToRef(homeRef)}>Home &nbsp; </a>
        <span>
          &gt;
          <a onClick={() => goToRef(worksRef)}> &nbsp; Works &nbsp; </a>
          &gt; &nbsp; {work.name}
        </span>
      </div>
      <div className='work-details-description-container'>
        <p>{work.longDescription}</p>
        <div className='work-details-description-tags'>
          <h3>Technologies</h3>
          {work.tags.map((tag, index) => (
            <span key={index}>{tag}, </span>
          ))}
          <div className='work-details-links'>
            {work.github && (
              <a href={work.github} target='_blank'>
                View on GitHub &nbsp;<i className='fa-solid fa-arrow-right'></i>
              </a>
            )}
            {work.live && (
              <a href={work.live} target='_blank'>
                View live &nbsp;<i className='fa-solid fa-arrow-right'></i>
              </a>
            )}
          </div>
        </div>
      </div>
      {work.images && work.images.map((image) => <img src={image} alt='' key={image} />)}
      <div className='work-details-controls'>
        <Link to={`/work/${prevWork}`}>
          <i className='fa-solid fa-arrow-left'></i>
        </Link>
        <Link to={`/work/${nextWork}`}>
          <i className='fa-solid fa-arrow-right'></i>
        </Link>
      </div>
    </div>
  );
}
