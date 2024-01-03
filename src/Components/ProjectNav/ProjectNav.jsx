import { PROJECTS } from '../../data/ProjectsData.astro';
import './ProjectNav.css';

export default function ProjectNav({ project }) {
  const projectIndex = PROJECTS.findIndex((item) => item.id === project.id);

  if (projectIndex === -1) {
    return <NotFound />;
  }

  const nextProjectIndex = (projectIndex + 1) % PROJECTS.length;
  const prevProjectIndex = (projectIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const nextProject = PROJECTS[nextProjectIndex].id;
  const prevProject = PROJECTS[prevProjectIndex].id;

  return (
    <div className='work-details-controls'>
      <a href={`/project/${prevProject}`}>
        <svg
          width='44'
          height='44'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 6l-6 6l6 6' />
        </svg>
      </a>
      <a href={`/project/${nextProject}`}>
        <svg
          width='44'
          height='44'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          transform='rotate(180)'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M15 6l-6 6l6 6' />
        </svg>
      </a>
    </div>
  );
}
