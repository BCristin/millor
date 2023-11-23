import { Benefits } from '../section/Benefits/Benefits.jsx';
import { Catalog } from '../section/Catalog/Catalog.jsx';
import { Discount } from '../section/Discount/Discount.jsx';
import { Header } from '../section/Header/Header.jsx';
import { Instagram } from '../section/Instagram/Instagram.jsx';
import { News } from '../section/News/News.jsx';
import { Roasting } from '../section/Roasting/Roasting.jsx';

export const Home = () => {
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
