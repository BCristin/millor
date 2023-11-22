import { useState } from 'react';
import { PopupRegiste } from '../components/PopupRegiste/PopupRegiste.jsx';
import { Benefits } from '../section/Benefits/Benefits.jsx';
import { Catalog } from '../section/Catalog/Catalog.jsx';
import { Discount } from '../section/Discount/Discount.jsx';
import { Footer } from '../section/Footer/Footer.jsx';
import { Header } from '../section/Header/Header.jsx';
import { Instagram } from '../section/Instagram/Instagram.jsx';
import { News } from '../section/News/News.jsx';
import { Roasting } from '../section/Roasting/Roasting.jsx';
import { Subscribe } from '../section/Subscribe/Subscribe.jsx';

export const Home = () => {
	const [isOpen, setIsOpen] = useState(true);

	// useEffect(() => {
	// 	const handleClickOutside = (event) => {
	// 		if (!isOpen) {
	// 			return;
	// 		}

	// 		if (!event.target.closest('.modal')) {
	// 			setIsOpen(false);
	// 		}
	// 	};

	// 	document.addEventListener('click', handleClickOutside);
	// 	return () => {
	// 		document.removeEventListener('click', handleClickOutside);
	// 	};
	// }, [isOpen]);
	return (
		<>
			<Header setIsOpen={setIsOpen}></Header>
			<div className="testzone"></div>
			<main className="main">
				<div className="container">
					<Catalog></Catalog>
					<Discount></Discount>
				</div>
				<Benefits></Benefits>
				<Roasting></Roasting>
				<News></News>
				<Instagram></Instagram>
				<Subscribe></Subscribe>
			</main>
			<footer className="footer">
				<Footer></Footer>
			</footer>

			{isOpen && <PopupRegiste setIsOpen={setIsOpen} className="modal" />}
		</>
	);
};
