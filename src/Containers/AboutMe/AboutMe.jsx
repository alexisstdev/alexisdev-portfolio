import './AboutMe.css';
import { forwardRef } from 'react';

function AboutMe({ goToRef, contactRef }, ref) {
  return (
    <div className='aboutme-container container' ref={ref} id='home'>
      <div className='aboutme-content'>
        <img src='me.jpg' alt='alexis-image' />
        <div className='aboutme-info'>
          <h1>
            Hi, I'm <span>Alexis</span>
          </h1>
          <p>Software Developer</p>
          <ul className='social-links'>
            <li>
              <a href='https://github.com/alexisstdev' target='_blank'>
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/alexisstdev/' target='_blank'>
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='aboutme-buttons'>
        <a
          href='https://drive.google.com/file/d/1hq7FlfFQXqsa7zTpFAzfqbRl96p-PL2G/view?usp=sharing'
          target='_blank'
        >
          <button className='btn btn-primary'>View resume</button>
        </a>
        <button className='btn btn-secondary' onClick={() => goToRef(contactRef)}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default forwardRef(AboutMe);
