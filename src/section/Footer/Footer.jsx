import logo from '../../assets/images/logo.png';
import styles from '../../components/Menu/menu.module.scss';

export const Footer = () => {
	return (
		<div className={styles.menu}>
			<div className="container">
				<nav className={styles.nav}>
					<img src={logo} alt="logo" className={styles.logo} />
					<ul className={styles.nav__list}>
						<li>
							<a className={styles.nav__link} href="#!">
								Каталог товаров
							</a>
						</li>
						<li>
							<a className={styles.nav__link} href="#!">
								Блог
							</a>
						</li>
						<li>
							<a className={styles.nav__link} href="#!">
								Контакты
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
