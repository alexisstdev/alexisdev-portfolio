import useNavbar from '../../hooks/useNavbar';
import './Navbar.css';

export default function Navbar() {
  const { scrollDirection, isOpen, toggleMenu } = useNavbar();

  const handleClick = () => {
    toggleMenu(true);
  };

  return (
    <header className='navbar-container'>
      <nav
        className={`navbar ${scrollDirection === 'down' ? 'scroll-down' : 'scroll-up'}`}
      >
        <a className='navbar-logo' onClick={handleClick} href='/'>
          <img src='/alexisdev-logo.svg' alt='alexisdev logo' />
        </a>
        <ul className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          <a className='navbar-link' onClick={handleClick} href='/'>
            Home
          </a>
          <a className='navbar-link' onClick={handleClick} href='/#experience'>
            Experience
          </a>
          <a className='navbar-link' onClick={handleClick} href='/#projects'>
            Projects
          </a>
          <a className='navbar-link' onClick={handleClick} href='/#contact'>
            Contact
          </a>
        </ul>
        <div className='navbar-toggle' onClick={() => toggleMenu(isOpen)}>
          <span className={` ${isOpen ? 'is-active' : ''}`}>
            <svg
              class='icon'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='2'
              stroke='currentColor'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M4 6l16 0'></path>
              <path d='M4 12l16 0'></path>
              <path d='M4 18l16 0'></path>
            </svg>
          </span>
        </div>
      </nav>
    </header>
  );
}
