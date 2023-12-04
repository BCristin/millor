import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from '../../components/Menu/menu.module.scss';

export const Footer = () => {
	return (
		<div className={styles.menu}>
			<div className={'container'}>
				<nav className={styles.nav}>
					<img src={logo} alt="logo" className={styles.logo} />
					<ul className={styles.nav__list}>
						<li>
							<Link to={{ pathname: '/', hash: '#catalog' }} className={styles.nav__link}>
								Каталог товаров
							</Link>
						</li>
						<li>
							<Link to="/blog" className={styles.nav__link}>
								Блог
							</Link>
						</li>
						<li>
							<Link to="/contact" className={styles.nav__link}>
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
