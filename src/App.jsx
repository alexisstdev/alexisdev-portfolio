import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import WorkDetails from './Containers/WorkDetails/WorkDetails';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Containers/AboutMe/AboutMe';
import Works from './Containers/Works/Works';
import { AnimatePresence } from 'framer-motion';
import AnimatedContainer from './Components/AnimatedContainer';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from './Components/Contact/Contact';

export default function App() {
  const location = useLocation();
  const worksRef = useRef();
  const homeRef = useRef();
  const contactRef = useRef();
  const navigate = useNavigate();

  function goToRef(ref) {
    if (location.pathname === '/') {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    navigate('/');
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <>
              <Navbar
                goToRef={goToRef}
                homeRef={homeRef}
                worksRef={worksRef}
                contactRef={contactRef}
              />
              <AnimatedContainer>
                <AboutMe ref={homeRef} />
                <Works ref={worksRef} />
                <Contact ref={contactRef} />
              </AnimatedContainer>
            </>
          }
        />
        <Route
          path='/work/:id'
          element={
            <>
              <Navbar
                goToRef={goToRef}
                homeRef={homeRef}
                worksRef={worksRef}
                contactRef={contactRef}
              />
              <AnimatedContainer>
                <WorkDetails goToRef={goToRef} homeRef={homeRef} worksRef={worksRef} />
              </AnimatedContainer>
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
