export const worksData = [
	{
		id: 5,
		name: 'Masonic Lodge Manager',
		path: 'masoniclodge',
		category: 'Fullstack Application',
		preview: '/works/masoniclodge/1.png',
		images: [
			'/works/masoniclodge/1.png',
			'/works/masoniclodge/2.png',
			'/works/masoniclodge/3.png',
			'/works/masoniclodge/4.png',
			'/works/masoniclodge/5.png',
			'/works/masoniclodge/6.png',
		],
		description:
			'Web application designed for managing the Masonic lodges and their members in Tamaulipas.',
		tags: [
			'React',
			'Redux',
			'RTK Query',
			'Chakra UI',
			'QR Code',
			'NodeJS',
			'Express',
			'MySQL',
			'JWT',
		],
		longDescription: `<p>I developed a fullstack application for "Gran Logia de Tamaulipas" to streamline the management of Masonic lodges and their members in Tamaulipas, México. </p>
		<p>One of the key features is the QR code scanning functionality. Members can conveniently use their phones to scan QR codes associated with a lodge, allowing them to keep track of their attendances and maintain a digital register.</p>
		<p>The frontend, built with React, Redux, Chakra UI, and React Router, provides an intuitive interface with a responsive and user-friendly design. Administrators can easily navigate and perform CRUD operations to manage lodges and members effectively.</p>
		<p>The backend, powered by Node.js and Express, along with a MySQL database, provides the necessary API to support the frontend functionalities. It utilizes JSON Web Tokens (JWT) for secure user authentication and authorization.</p>
		<p>Due to client confidentiality, I am unable to share the source. However, I am working on a demo version.</p>`,
	},
	{
		id: 3,
		name: 'Weather App',
		path: 'weatherapp',
		category: 'Frontend Application',
		preview: '/works/weatherapp/1.png',
		images: ['/works/weatherapp/1.png', '/works/weatherapp/2.png'],
		github: 'https://github.com/alexisstdev/weather-app',
		live: 'https://weatherst.vercel.app/',
		description: 'Weather App that allows users to view forecasts for various locations.',
		tags: ['React', 'Redux', 'OpenWeatherMap', 'Google maps api'],
		longDescription: `<p>User-friendly and intuitive weather web application designed to provide accurate and up-to-date weather forecasts for locations around the world. With a modern interface, users can easily access weather information for their desired locations.</p>
		<p>Powered by React and Redux, this app offers a nice user experience, allowing users to effortlessly navigate through the app and retrieve weather data.</p>
		<p>By using the OpenWeatherMap and Google Maps APIs, the app fetches precise and reliable weather information, including temperature, humidity, wind speed, and conditions for each location.</p>`,
	},
	{
		id: 2,
		name: 'Alexis.AI - Image Generation',
		path: 'alexisai',
		category: 'Fullstack Application',
		images: ['/works/alexis-ai/1.png', '/works/alexis-ai/2.png'],
		preview: '/works/alexis-ai/1.png',
		description: 'A tool for generate and share unique images with DALL-E.',
		tags: ['React', 'Node.js', 'Express', 'MongoDB', 'DALL-E'],
		github: 'https://github.com/alexisstdev/alexis.ai',
		live: 'https://alexis-ai.vercel.app/',
		longDescription: `<p>Fullstack MERN application, this personal project is an image generation tool that utilizes DALL-E to create unique and beautiful images. With this tool, users can easily generate and share their creations with the community.</p>
		<p>The user interface is built using React, providing a simple and intuitive experience for users.</p>
		<p>The project also incorporates MongoDB to store the data and Cloudinary to manage and optimize the images.</p>`,
	},
	{
		id: 1,
		category: 'Windows Application',
		name: 'Binary Search Tree Viewer',
		path: 'bst-viewer',
		preview: '/works/bst-visualizer/1.png',
		images: [],
		video: '/works/bst-visualizer/2.mp4',
		github: 'https://github.com/alexisstdev/binary-search-tree-viewer',
		description: 'Binary search tree visualizer and traversal algorithms viewer',
		tags: ['C#', 'Windows Forms', 'SVG'],
		longDescription: `<p>This application allows users to add, remove and clear nodes from a Binary search tree in a visual way, as well as visualize different traversal algorithms. This tool can help users to better understand its behavior and operations in an intuitive way.</p>
		<p>The project was built using C# Windows Forms and SVGs to render the visual representation of the tree. </p>`,
	},
];
