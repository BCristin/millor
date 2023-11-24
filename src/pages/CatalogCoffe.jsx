import { CatalogCards } from '../section/CatalogCards/CatalogCards';
import { SortMenu } from '../section/SortMenu/SortMenu';
import { TopCatalogPage } from '../section/TopCatalogPage/TopCatalogPage';

export const CatalogCoffe = () => {
	return (
		<>
			<TopCatalogPage></TopCatalogPage>
			<SortMenu></SortMenu>
			<CatalogCards></CatalogCards>
		</>
	);
};
