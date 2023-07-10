import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import WorkDetails from './Containers/WorkDetails/WorkDetails';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Containers/AboutMe/AboutMe';
import Experience from './Containers/Experience/Experience';
import Works from './Containers/Works/Works';
import { AnimatePresence } from 'framer-motion';
import AnimatedContainer from './Components/AnimatedContainer';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
	const location = useLocation();
	const homeRef = useRef();
	const experienceRef = useRef();
	const worksRef = useRef();
	const contactRef = useRef();
	const navigate = useNavigate();

	function goToRef(ref) {
		const scroll = () => ref.current?.scrollIntoView({ behavior: 'smooth' });
		if (location.pathname === '/') {
			scroll();
			return;
		}
		navigate('/');
		setTimeout(() => {
			if (ref.current.id === 'home') window.scrollTo(0, 0);
			else scroll();
		}, 500);
	}

	return (
		<>
			<Navbar
				goToRef={goToRef}
				homeRef={homeRef}
				worksRef={worksRef}
				contactRef={contactRef}
				experienceRef={experienceRef}
			/>
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route
						exact
						path='/'
						element={
							<>
								<AnimatedContainer>
									<AboutMe ref={homeRef} goToRef={goToRef} contactRef={contactRef} />
									<Works ref={worksRef} />
									<Experience ref={experienceRef} />
									<Contact ref={contactRef} />
									<Footer />
								</AnimatedContainer>
							</>
						}
					/>
					<Route
						path='/work/:path'
						element={
							<>
								<AnimatedContainer>
									<WorkDetails goToRef={goToRef} homeRef={homeRef} worksRef={worksRef} />
									<Footer />
								</AnimatedContainer>
							</>
						}
					/>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</AnimatePresence>
			<Analytics />
		</>
	);
}
