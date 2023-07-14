import React, { useRef } from 'react';

export const RefsContext = React.createContext();

export default function RefsProvider({ children }) {
	const aboutMeRef = useRef();
	const experienceRef = useRef();
	const worksRef = useRef();
	const contactRef = useRef();

	return (
		<RefsContext.Provider value={{ aboutMeRef, experienceRef, worksRef, contactRef }}>
			{children}
		</RefsContext.Provider>
	);
}
