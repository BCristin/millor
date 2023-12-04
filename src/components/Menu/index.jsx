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
	const [visibleMenuMobile, setVisibleMenuMobile] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsAtTop(window.scrollY === 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (visibleMenuMobile) {
		document.body.classList.add(styles['overflow-hidden']);
	} else {
		document.body.classList.remove(styles['overflow-hidden']);
	}
	return (
		<>
			<div
				className={cn(styles.menu, {
					[styles.menu__search]: visibleInput || !isAtTop,
				})}>
				<div className={'container'}>
					<nav className={styles.nav}>
						<svg
							className={styles.menu__hamburger_icon}
							onClick={() => setVisibleMenuMobile(true)}
							xmlns="http://www.w3.org/2000/svg"
							width="63"
							height="34"
							viewBox="0 0 63 34"
							fill="none">
							<path d="M2 2H61" stroke="black" strokeWidth="3.072" strokeLinecap="round" />
							<path d="M2 16.0002H61" stroke="black" strokeWidth="3.072" strokeLinecap="round" />
							<path d="M2 32H61" stroke="black" strokeWidth="3.072" strokeLinecap="round" />
						</svg>
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

			<div className={cn(styles.menu__hamburger, { [styles.visible__ham]: visibleMenuMobile })}>
				<div className={styles.menu__hamburger__top}>
					<Link to="/">
						<img src={logo} alt="logo" className={styles.logo} />
					</Link>
					<svg
						onClick={() => setVisibleMenuMobile(false)}
						xmlns="http://www.w3.org/2000/svg"
						width="44"
						height="44"
						viewBox="0 0 44 44"
						fill="none">
						<path
							d="M2 2.4873L41.524 42.0001"
							stroke="black"
							strokeWidth="3"
							strokeLinecap="round"
						/>
						<path
							d="M2.47656 41.5127L42.0005 1.99995"
							stroke="black"
							strokeWidth="3"
							strokeLinecap="round"
						/>
					</svg>
				</div>

				<ul className={styles.menu__hamburger__list} onClick={() => setVisibleMenuMobile(false)}>
					<li>
						<Link className={styles.menu__hamburger__link} to={{ pathname: '/', hash: '#catalog' }}>
							Каталог товаров
						</Link>
					</li>
					<li>
						<Link to="/blog" className={styles.menu__hamburger__link}>
							Блог
						</Link>
					</li>
					<li>
						<Link to="/contact" className={styles.menu__hamburger__link}>
							Контакты
						</Link>
					</li>
				</ul>

				<ul className={styles.menu__hamburger__cart} onClick={() => setVisibleMenuMobile(false)}>
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

				<a className={styles.menu__hamburger__mail} href="mailto:Import@kldrefine.com">
					Import@kldrefine.com
				</a>

				<div className={styles.menu__hamburger__social}>
					<a href="tel:+0000000000">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="102"
							height="102"
							viewBox="0 0 102 102"
							fill="none">
							<circle cx="51" cy="51" r="51" fill="#F9B300" />
							<path
								d="M77.5188 72.1751V64.1905C77.5513 62.8852 77.1019 61.6135 76.2562 60.6173C75.4104 59.6211 74.2273 58.9699 72.9319 58.7875C70.3715 58.4505 67.8576 57.8255 65.4381 56.9244C64.4835 56.5664 63.4462 56.4888 62.4488 56.7011C61.4515 56.9134 60.5361 57.4066 59.811 58.1221L56.4241 61.5023C49.7476 57.7135 44.2195 52.1963 40.4231 45.533L43.81 42.1528C44.527 41.4292 45.0212 40.5156 45.2339 39.5202C45.4465 38.5249 45.3689 37.4896 45.0101 36.537C44.1072 34.1222 43.481 31.6133 43.1433 29.058C42.9622 27.779 42.3212 26.6093 41.3399 25.7671C40.3586 24.9248 39.1039 24.4674 37.8096 24.4801H29.8091C29.0686 24.4808 28.3364 24.6354 27.6591 24.934C26.9818 25.2326 26.3741 25.6686 25.8749 26.2144C25.3757 26.7602 24.9958 27.4038 24.7595 28.1042C24.5231 28.8045 24.4355 29.5463 24.5021 30.2823C25.3775 38.5091 28.1823 46.4145 32.6893 53.358C36.7838 59.7887 42.2468 65.2409 48.6903 69.3273C55.6161 73.8097 63.4988 76.6083 71.7051 77.4983C72.4448 77.565 73.1903 77.4768 73.8939 77.2393C74.5975 77.0018 75.2436 76.6203 75.7909 76.1192C76.3382 75.6181 76.7746 75.0084 77.0722 74.3293C77.3697 73.6501 77.5218 72.9164 77.5188 72.1751Z"
								stroke="white"
								stroke-width="4.096"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
					<a href="http://instagram.com">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="102"
							height="102"
							viewBox="0 0 102 102"
							fill="none">
							<path
								d="M60.7617 51C60.7617 56.3914 56.3914 60.7617 51 60.7617C45.6086 60.7617 41.2383 56.3914 41.2383 51C41.2383 45.6086 45.6086 41.2383 51 41.2383C56.3914 41.2383 60.7617 45.6086 60.7617 51Z"
								fill="#F9B300"
							/>
							<path
								d="M73.8292 33.7287C73.36 32.4571 72.6113 31.3061 71.6386 30.3614C70.6939 29.3887 69.5437 28.64 68.2713 28.1708C67.2394 27.77 65.6893 27.293 62.8341 27.163C59.7454 27.0222 58.8193 26.9918 51 26.9918C43.1799 26.9918 42.2538 27.0214 39.1659 27.1622C36.3107 27.293 34.7598 27.77 33.7287 28.1708C32.4563 28.64 31.3054 29.3887 30.3614 30.3614C29.3887 31.3061 28.64 32.4563 28.17 33.7287C27.7692 34.7606 27.2922 36.3115 27.1622 39.1667C27.0214 42.2546 26.991 43.1807 26.991 51.0008C26.991 58.8201 27.0214 59.7462 27.1622 62.8348C27.2922 65.69 27.7692 67.2402 28.17 68.2721C28.64 69.5445 29.3879 70.6946 30.3606 71.6394C31.3054 72.6121 32.4555 73.3607 33.7279 73.83C34.7598 74.2316 36.3107 74.7086 39.1659 74.8385C42.2538 74.9794 43.1791 75.009 50.9992 75.009C58.8201 75.009 59.7462 74.9794 62.8333 74.8385C65.6885 74.7086 67.2394 74.2316 68.2713 73.83C70.8254 72.8448 72.844 70.8262 73.8292 68.2721C74.23 67.2402 74.707 65.69 74.8378 62.8348C74.9786 59.7462 75.0082 58.8201 75.0082 51.0008C75.0082 43.1807 74.9786 42.2546 74.8378 39.1667C74.7078 36.3115 74.2308 34.7606 73.8292 33.7287ZM51 66.0379C42.6943 66.0379 35.9613 59.3057 35.9613 51C35.9613 42.6943 42.6943 35.9621 51 35.9621C59.3049 35.9621 66.0379 42.6943 66.0379 51C66.0379 59.3057 59.3049 66.0379 51 66.0379ZM66.6324 38.8819C64.6916 38.8819 63.1181 37.3084 63.1181 35.3676C63.1181 33.4267 64.6916 31.8532 66.6324 31.8532C68.5733 31.8532 70.1468 33.4267 70.1468 35.3676C70.146 37.3084 68.5733 38.8819 66.6324 38.8819Z"
								fill="#F9B300"
							/>
							<path
								d="M51 0C22.8378 0 0 22.8378 0 51C0 79.1622 22.8378 102 51 102C79.1622 102 102 79.1622 102 51C102 22.8378 79.1622 0 51 0ZM80.1085 63.0737C79.9669 66.1912 79.4712 68.3196 78.7474 70.1826C77.2261 74.1164 74.1164 77.2261 70.1826 78.7474C68.3204 79.4712 66.1912 79.9661 63.0745 80.1085C59.9516 80.2509 58.954 80.2852 51.0008 80.2852C43.0468 80.2852 42.0499 80.2509 38.9263 80.1085C35.8096 79.9661 33.6804 79.4712 31.8182 78.7474C29.8634 78.012 28.0937 76.8595 26.6307 75.3693C25.1413 73.907 23.9887 72.1366 23.2533 70.1826C22.5296 68.3204 22.0339 66.1912 21.8923 63.0745C21.7483 59.9508 21.7148 58.9532 21.7148 51C21.7148 43.0468 21.7483 42.0492 21.8915 38.9263C22.0331 35.8088 22.5281 33.6804 23.2518 31.8174C23.9872 29.8634 25.1405 28.093 26.6307 26.6307C28.093 25.1405 29.8634 23.988 31.8174 23.2526C33.6804 22.5288 35.8088 22.0339 38.9263 21.8915C42.0492 21.7491 43.0468 21.7148 51 21.7148C58.9532 21.7148 59.9508 21.7491 63.0737 21.8923C66.1912 22.0339 68.3196 22.5288 70.1826 23.2518C72.1366 23.9872 73.907 25.1405 75.3701 26.6307C76.8595 28.0937 78.0128 29.8634 78.7474 31.8174C79.4719 33.6804 79.9669 35.8088 80.1093 38.9263C80.2517 42.0492 80.2852 43.0468 80.2852 51C80.2852 58.9532 80.2517 59.9508 80.1085 63.0737Z"
								fill="#F9B300"
							/>
						</svg>
					</a>
				</div>
			</div>
		</>
	);
};
