import { HeaderSlider } from '../../components/HeaderSlider/index.jsx';
import { Menu } from '../../components/Menu/index.jsx';
import { Benefits } from '../../section/Benefits/Benefits.jsx';
import { Catalog } from '../../section/Catalog/Catalog.jsx';
import { Discount } from '../../section/Discount/Discount.jsx';
import { Footer } from '../../section/Footer/Footer.jsx';
import { Instagram } from '../../section/Instagram/Instagram.jsx';
import { News } from '../../section/News/News.jsx';
import { Roasting } from '../../section/Roasting/Roasting.jsx';
import { Subscribe } from '../../section/Subscribe/Subscribe.jsx';
import styles from './Home.module.scss';

export const Home = () => {
	return (
		<>
			<Menu></Menu>
			<header className={styles.header} id="top">
				<div className="container">
					<div className={styles.header__inner}>
						<HeaderSlider></HeaderSlider>
						<svg
							className={styles.decor}
							width="1444"
							height="1740"
							viewBox="0 0 1444 1740"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M846.646 156.114C968.951 188.2 1108.59 132.457 1211.03 218.335C1328.09 316.478 1441.59 464.929 1443.01 656.09C1444.41 845.81 1297.73 989.54 1218 1159.62C1140.5 1324.96 1107.56 1532.9 982.984 1637.45C853.482 1746.13 692.386 1760.33 553.766 1717.07C421.909 1675.91 340.168 1530.53 247.04 1407.77C149.912 1279.73 -8.0201 1179.39 0.737125 988.062C9.59011 794.645 204.937 697.983 287.364 526.781C365.257 364.997 336.279 108.39 465.498 22.749C594.784 -62.9363 713.71 121.239 846.646 156.114Z"
								fill="#F9B300"
							/>
						</svg>
					</div>
				</div>
			</header>
			<main className="main">
				<div className="container">
					<Catalog></Catalog>
					<Discount></Discount>
				</div>
				<Benefits></Benefits>
				<Roasting></Roasting>
				<News></News>
				<Instagram></Instagram>
				<Subscribe></Subscribe>
			</main>
			<footer className="footer">
				<Footer></Footer>
			</footer>
		</>
	);
};
