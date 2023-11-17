import cart from '../../assets/icon/cart.svg';
import search from '../../assets/icon/search.svg';
import user from '../../assets/icon/user.svg';
import logo from '../../assets/images/logo.png';
import styles from './menu.module.scss';

export const Menu = () => {
	return (
		<nav className={styles.menu}>
			<img src={logo} alt="logo" className={styles.logo} />
			<ul className={styles.menu__list}>
				<li>
					<a className={styles.menu__link} href="#!">
						Каталог товаров
					</a>
				</li>
				<li>
					<a className={styles.menu__link} href="#!">
						Блог
					</a>
				</li>
				<li>
					<a className={styles.menu__link} href="#!">
						Контакты
					</a>
				</li>
			</ul>
			<ul className={styles.cart}>
				<li>
					<a href="#!">
						<img src={search} alt="search" />
					</a>
				</li>
				<li>
					<a href="#!">
						<img src={cart} alt="cart" />
					</a>
				</li>
				<li>
					<a href="#!">
						<img src={user} alt="user" />
					</a>
				</li>
			</ul>
		</nav>
	);
};
