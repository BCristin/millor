import product from '../assets/images/catalog-page/tea/tea1.png';
import { CardTea } from '../components/CardTea/CardTea';
import { CatalogCards } from '../section/CatalogCards/CatalogCards';
import { SortMenuOther } from '../section/SortMenuOther/SortMenuOther';
import { TopCatalogPage } from '../section/TopCatalogPage/TopCatalogPage';

import decor from '../assets/images/catalog-page/tea/decor.png';
import tea1 from '../assets/images/catalog-page/tea/tea1.png';
import tea2 from '../assets/images/catalog-page/tea/tea2.png';
import tea3 from '../assets/images/catalog-page/tea/tea3.png';
import tea4 from '../assets/images/catalog-page/tea/tea4.png';
import tea5 from '../assets/images/catalog-page/tea/tea5.png';
import tea6 from '../assets/images/catalog-page/tea/tea6.png';
import tea7 from '../assets/images/catalog-page/tea/tea7.png';

const cards = [
	{ name: 'Черный чай', img: tea1 },
	{ name: 'Зеленый чай', img: tea2 },
	{ name: 'Молочный улунг', img: tea3 },
	{ img: decor },
	{ name: 'Травяной чай', img: tea4 },
	{ name: 'Матча', img: tea5 },
	{ name: 'Пуэр', img: tea6 },
	{ name: 'Кофейные напитки', img: tea7 },
];

export const CatalogTea = () => {
	return (
		<>
			<TopCatalogPage className={'remove-decor'}></TopCatalogPage>
			<SortMenuOther date={cards}></SortMenuOther>
			<CatalogCards>
				<CardTea product={product} />
				<CardTea product={product} />
				<CardTea product={product} />
				<CardTea product={product} dicount={true} />
				<CardTea product={product} />
				<CardTea product={product} />
				<CardTea product={product} />
				<CardTea product={product} dicount={true} />
				<CardTea product={product} />
				<CardTea product={product} />
				<CardTea product={product} />
				<CardTea product={product} dicount={true} />
			</CatalogCards>
		</>
	);
};
