import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cart from '../../assets/icon/cart.svg';
import search from '../../assets/icon/search.svg';
import user from '../../assets/icon/user.svg';
import logo from '../../assets/images/logo.png';
import { InputSearch } from '../InputSearch/InputSearch';
import styles from './menu.module.scss';

export const Menu = ({ setIsOpen }) => {
	const [visibleInput, setVisibleInput] = useState(false);
	const [isAtTop, setIsAtTop] = useState(true);
	const active = useLocation().pathname.slice(1);

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
					<Link to="/">
						<img src={logo} alt="logo" className={styles.logo} />
					</Link>
					<ul className={cn(styles.nav__list, { [styles.invisible]: visibleInput })}>
						<li>
							<Link
								className={cn(styles.nav__link, { [styles.active]: active === 'catalog' })}
								to={{ pathname: '/', hash: '#catalog' }}>
								Каталог товаров
							</Link>
						</li>
						<li>
							<Link
								to="/blog"
								className={cn(styles.nav__link, { [styles.active]: active === 'blog' })}>
								Блог
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className={cn(styles.nav__link, { [styles.active]: active === 'contact' })}>
								Контакты
							</Link>
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
							<Link to="/cart">
								<img src={cart} alt="cart" />
							</Link>
						</li>
						<li>
							<a href="#!">
								<img onClick={() => setIsOpen(true)} src={user} alt="user" />
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
