import classNames from 'classnames';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './TopCatalogPage.module.scss';

export const TopCatalogPage = ({ className }) => {
	return (
		<div className={classNames(styles.topCatalogCoffe, className)}>
			<div className={'container'}>
				<Breadcrumbs className={styles.breadcrumbs}></Breadcrumbs>
				<h1>Свежеобжаренный кофе</h1>
			</div>
		</div>
	);
};
