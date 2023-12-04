import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Contact } from '../components/Contact/Contact';
import styles from '../section/CardProductBig/CardProductBig.module.scss';

export const Contacts = () => {
	return (
		<>
			<div className={'container'}>
				<Breadcrumbs className={styles.breadcrumbs} />
			</div>

			<Contact></Contact>
		</>
	);
};
