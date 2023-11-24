// Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const linksInfo = [
	{ name: 'Свежеобжаренный кофе', link: 'coffe' },
	{ name: 'Чай и кофейные напитки', link: 'tea' },
	{ name: 'Продукция для вендинга', link: 'machine' },
	{ name: 'Здоровое питание', link: 'cereal' },
];

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);

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
		<div>
			<Link to="/">Главная</Link>
			<Link to={{ pathname: '/', hash: '#catalog' }}>
				{svg}
				Каталог товаров
			</Link>
			{pathnames.map((name, index) => {
				const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
				const isLast = index === pathnames.length - 1;
				const realName = linksInfo.filter((item) => item.link === name)[0].name;
				return isLast ? (
					<span key={index}>
						{svg}
						{realName}
					</span>
				) : (
					<span key={index}>
						<Link to={routeTo}>
							{svg} {realName}
						</Link>
					</span>
				);
			})}
		</div>
	);
};

export default Breadcrumbs;
