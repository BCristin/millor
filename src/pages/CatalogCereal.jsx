import decor from '../assets/images/catalog-page/cereal/decor.png';
import img from '../assets/images/catalog-page/cereal/filter.png';

import product from '../assets/images/catalog-page/cereal/filter.png';
import { CardTea } from '../components/CardTea/CardTea';
import { CatalogCards } from '../section/CatalogCards/CatalogCards';
import { SortMenuOther } from '../section/SortMenuOther/SortMenuOther';
import { TopCatalogPage } from '../section/TopCatalogPage/TopCatalogPage';

const date = [
	{ name: 'Цикорий и корень цикория', img },
	{ name: 'Ячменные напитки', img },
	{ img: decor },
	{ name: 'Напитки    для здоровья', img },
	{ name: 'Протеиновые смеси', img },
	{ name: 'Толокняные каши', img },
];
export const CatalogCereal = () => {
	return (
		<>
			<TopCatalogPage className={'remove-decor'}></TopCatalogPage>
			<SortMenuOther date={date}></SortMenuOther>
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
