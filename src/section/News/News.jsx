import img from '../../assets/images/news/news-img.jpg';
import { CardNews } from '../../components/CardNews/CardNews';
import { Title } from '../../components/Title/Title';
import styles from './News.module.scss';

export const News = () => {
	return (
		<div className={styles.news}>
			<div className="container">
				<div className={styles.news__inner}>
					<div className={styles.news__top}>
						<Title className={styles.title}>Новости компании</Title>
						<p className={styles.more}>Читать все</p>
					</div>
					<div className={styles.news__box}>
						<CardNews
							img={img}
							title={'Танзанийский кофе. Откуда он взялся и почему мы его так любим?'}>
							Танзания – красивая африканская страна. Именно здесь расположены легендарные
							географические объекты – вулкан Килиманджаро и озеро Виктория.
							<br />
							<br />
							Но наш интерес вызван не столько природными красотами, сколько кофе...
						</CardNews>
						<CardNews title={'Африканский кофе Кения АА?'}>
							Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и
							ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности
							высокогорной арабики.
						</CardNews>
						<CardNews title={'Африканский кофе Кения АА?'}>
							Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и
							ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности
							высокогорной арабики.
						</CardNews>
						<CardNews
							img={img}
							title={'Танзанийский кофе. Откуда он взялся и почему мы его так любим?'}>
							Танзания – красивая африканская страна. Именно здесь расположены легендарные
							географические объекты – вулкан Килиманджаро и озеро Виктория.
							<br />
							<br />
							Но наш интерес вызван не столько природными красотами, сколько кофе...
						</CardNews>
					</div>
				</div>
			</div>
		</div>
	);
};
