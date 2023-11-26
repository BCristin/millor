import { CardCoffe } from '../components/CardCoffe/CardCoffe';
import { CatalogCards } from '../section/CatalogCards/CatalogCards';
import { SortMenu } from '../section/SortMenu/SortMenu';
import { TopCatalogPage } from '../section/TopCatalogPage/TopCatalogPage';

export const CatalogCoffe = () => {
	return (
		<>
			<TopCatalogPage></TopCatalogPage>
			<SortMenu></SortMenu>
			<CatalogCards>
				<CardCoffe />
				<CardCoffe />
				<CardCoffe dicount={true} />
				<CardCoffe />
				<CardCoffe />
				<CardCoffe />
				<CardCoffe />
				<CardCoffe />
				<CardCoffe />
				<CardCoffe />
				<CardCoffe />
				<CardCoffe />
			</CatalogCards>
		</>
	);
};
