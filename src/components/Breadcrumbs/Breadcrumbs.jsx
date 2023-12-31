import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const linksInfo = [
	{ name: 'Свежеобжаренный кофе', link: 'coffe', optionlink: true },
	{ name: 'Чай и кофейные напитки', link: 'tea', optionlink: true },
	{ name: 'Продукция для вендинга', link: 'machine', optionlink: true },
	{ name: 'Здоровое питание', link: 'cereal', optionlink: true },
	{ name: 'Блог', link: 'blog', optionlink: false },
	{ name: 'Контакты', link: 'contact', optionlink: false },
	{ name: 'Корзина', link: 'cart', optionlink: false },
	{ name: 'Личный кабинет', link: 'user', optionlink: false },
];

const Breadcrumbs = ({ className, bgcolor = 'none' }) => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x); //['cereal', 'product']
	const svg = (
		<svg
			className={styles.svg}
			xmlns="http://www.w3.org/2000/svg"
			width="4"
			height="4"
			viewBox="0 0 4 4"
			fill="none">
			<circle cx="2" cy="2" r="2" fill="white" />
		</svg>
	);

	return (
		<div className={className} style={{ backgroundColor: bgcolor }}>
			<div className="container">
				<div className={styles.breadcrumbs}>
					<Link to="/">Главная</Link>

					{pathnames.map((name, index) => {
						const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
						const isLast = index === pathnames.length - 1;

						const realNameObj = linksInfo.filter((item) => item.link === name)[0];
						const realName = realNameObj?.name || name.replace(/-|%20/g, ' ');

						const optional = realNameObj?.optionlink ? (
							<Link to={{ pathname: '/', hash: '#catalog' }}>
								{svg}
								Каталог товаров
							</Link>
						) : (
							''
						);

						return isLast ? (
							<span key={index}>
								{optional}
								{svg}
								{realName}
							</span>
						) : (
							<span key={index}>
								{optional}
								<Link to={routeTo}>
									{svg} {realName}
								</Link>
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Breadcrumbs;
