import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar({ goToRef, worksRef, contactRef, homeRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (isOpenCheck) => {
    if (!isOpenCheck) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    setIsOpen(!isOpenCheck);
  };
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  function handleClick(ref) {
    toggleMenu(true);
    goToRef(ref);
  }

  return (
    <div className='navbar-container'>
      <nav
        className={`navbar ${scrollDirection === 'down' ? 'scroll-down' : 'scroll-up'}`}
      >
        <a className='navbar-logo' onClick={() => handleClick(homeRef)}>
          &lt;alexis.<span className='accent-color'>dev </span>/&gt;
        </a>
        <ul className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          <a className='navbar-link' onClick={() => handleClick(homeRef)}>
            Home
          </a>
          <a className='navbar-link' onClick={() => handleClick(worksRef)}>
            Works
          </a>
          <a className='navbar-link' onClick={() => handleClick(contactRef)}>
            Contact
          </a>
        </ul>
        <div className='navbar-toggle' onClick={() => toggleMenu(isOpen)}>
          <i className={`fas fa-bars ${isOpen ? 'is-active' : ''}`}></i>
        </div>
      </nav>
    </div>
  );
}
