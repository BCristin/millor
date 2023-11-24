import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './TopCatalogPage.module.scss';

export const TopCatalogPage = () => {
	return (
		<div className={styles.topCatalogCoffe}>
			<div className={'container'}>
				<Breadcrumbs className={styles.breadcrumbs}></Breadcrumbs>
				<h1>Свежеобжаренный кофе</h1>
			</div>
		</div>
	);
};
