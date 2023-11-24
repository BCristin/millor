import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Benefits } from '../section/Benefits/Benefits.jsx';
import { Catalog } from '../section/Catalog/Catalog.jsx';
import { Discount } from '../section/Discount/Discount.jsx';
import { Header } from '../section/Header/Header.jsx';
import { Instagram } from '../section/Instagram/Instagram.jsx';
import { News } from '../section/News/News.jsx';
import { Roasting } from '../section/Roasting/Roasting.jsx';

export const Home = () => {
	const location = useLocation();
	useEffect(() => {
		const hash = window.location.hash;
		// Verificăm dacă există un hash în URL (de exemplu, #catalog)

		if (hash) {
			// Derulăm către secțiunea specificată în hash
			const element = document.getElementById(hash.substring(1));
			if (element) {
				element.scrollIntoView();
			}
		} else window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location.key]);
	return (
		<>
			<Header></Header>
			<div className="container">
				<Catalog></Catalog>
				<Discount></Discount>
			</div>
			<Benefits></Benefits>
			<Roasting></Roasting>
			<News></News>
			<Instagram></Instagram>
		</>
	);
};
