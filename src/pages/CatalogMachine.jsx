import imgDecor from '../assets/images/catalog-page/machine/decor.png';
import imgFilter from '../assets/images/catalog-page/machine/filter.jpg';
import { CardMachine } from '../components/CardMachine/CardMachine';

import { CatalogCards } from '../section/CatalogCards/CatalogCards';
import { SortMenuOther } from '../section/SortMenuOther/SortMenuOther';
import { TopCatalogPage } from '../section/TopCatalogPage/TopCatalogPage';
const date = [
	{ img: imgFilter, name: 'Гранулированный кофе' },
	{ img: imgFilter, name: 'Гранулированный цикорий' },
	{ img: imgFilter, name: 'Зерновой кофе' },
	{ img: imgDecor },
	{ img: imgFilter, name: 'Гранулированный какао' },
	{ img: imgFilter, name: 'Гранулированные кофейные напитки' },
	{ img: imgFilter, name: 'Кофе порошкообразный' },
	{ img: imgFilter, name: 'Сухое молоко гранулированное' },
];
export const CatalogMachine = () => {
	return (
		<>
			<TopCatalogPage className={'remove-decor'}></TopCatalogPage>
			<SortMenuOther date={date}></SortMenuOther>
			<CatalogCards>
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
				<CardMachine />
			</CatalogCards>
		</>
	);
};
