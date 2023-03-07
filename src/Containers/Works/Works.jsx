import './Works.css';
import Work from '../../Components/Work/Work';
import { worksData } from '../../WorksData';
import { forwardRef } from 'react';

function Works({ props }, ref) {
  return (
    <section className='works container' ref={ref}>
      <h2>Works</h2>
      <div className='works-grid'>
        {worksData.map((work) => (
          <Work key={work.id} workData={work} />
        ))}
      </div>
    </section>
  );
}

export default forwardRef(Works);
