import { CardTea } from '../components/CardTea/CardTea';
import { CatalogCards } from '../section/CatalogCards/CatalogCards';
import { SortMenuOther } from '../section/SortMenuOther/SortMenuOther';
import { TopCatalogPage } from '../section/TopCatalogPage/TopCatalogPage';

export const CatalogCereal = () => {
	return (
		<div>
			<TopCatalogPage className={'remove-decor'}></TopCatalogPage>
			<SortMenuOther></SortMenuOther>
			<CatalogCards>
				<CardTea />
				<CardTea />
				<CardTea />
				<CardTea dicount={true} />
				<CardTea />
				<CardTea />
				<CardTea />
				<CardTea dicount={true} />
				<CardTea />
				<CardTea />
				<CardTea />
				<CardTea dicount={true} />
			</CatalogCards>
		</div>
	);
};
