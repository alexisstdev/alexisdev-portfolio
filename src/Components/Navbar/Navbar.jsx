import { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ goToRef, worksRef, contactRef, homeRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
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

  return (
    <div className='navbar-container'>
      <nav
        className={`navbar ${scrollDirection === 'down' ? 'scroll-down' : 'scroll-up'}`}
      >
        <a className='navbar-logo' onClick={() => goToRef(homeRef)}>
          &lt;alexis.<span className='accent-color'>dev </span>/&gt;
        </a>
        <ul className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          <a className='navbar-link' onClick={() => goToRef(homeRef)}>
            Home
          </a>
          <a className='navbar-link' onClick={() => goToRef(worksRef)}>
            Works
          </a>
          <a className='navbar-link' onClick={() => goToRef(contactRef)}>
            Contact
          </a>
        </ul>
        <div className='navbar-toggle' onClick={toggleMenu}>
          <i className={`fas fa-bars ${isOpen ? 'is-active' : ''}`}></i>
        </div>
      </nav>
    </div>
  );
}
