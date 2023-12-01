import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import styles from '../section/CardProductBig/CardProductBig.module.scss';
import { MyOrders } from '../section/MyOrders/MyOrders';
import { PersonalPromo } from '../section/PersonalPromo/PersonalPromo.jsx';
import { UserInfo } from '../section/UserInfo/UserInfo';

export const User = () => {
	return (
		<>
			<Breadcrumbs className={styles.breadcrumbs} bgcolor="#FFF7E1" />
			<UserInfo />
			<MyOrders />
			<PersonalPromo />
		</>
	);
};
