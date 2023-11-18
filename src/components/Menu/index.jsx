import cn from 'classnames';
import { useEffect, useState } from 'react';
import cart from '../../assets/icon/cart.svg';
import search from '../../assets/icon/search.svg';
import user from '../../assets/icon/user.svg';
import logo from '../../assets/images/logo.png';
import { InputSearch } from '../InputSearch/InputSearch';
import styles from './menu.module.scss';

export const Menu = () => {
	const [visibleInput, setVisibleInput] = useState(false);
	const [isAtTop, setIsAtTop] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setIsAtTop(window.scrollY === 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={cn(styles.menu, {
				[styles.menu__search]: visibleInput || !isAtTop,
			})}>
			<div className="container">
				<nav className={styles.nav}>
					<a href="#!">
						<img src={logo} alt="logo" className={styles.logo} />
					</a>
					<ul className={cn(styles.nav__list, { [styles.invisible]: visibleInput })}>
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
					<div className={cn(styles.input__inner, { [styles.visible]: visibleInput })}>
						<InputSearch setVisibleInput={setVisibleInput}></InputSearch>
					</div>
					<ul className={styles.cart}>
						<li>
							<img
								onMouseEnter={() => setVisibleInput(true)}
								className={cn({ [styles.invisible]: visibleInput })}
								src={search}
								alt="search"
							/>
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
			</div>
		</div>
	);
};
