import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Menu } from '../../components/Menu/index.jsx';
import { SliderItem } from '../../components/SliderItem/index.jsx';
import styles from './Header.module.scss';
export const Header = () => {
	return (
		<>
			<Menu></Menu>
			<header className={styles.header} id="top">
				<div className="container">
					<div className={styles.header__inner}>
						<Swiper
							spaceBetween={50}
							effect={'fade'}
							fadeEffect={{ crossFade: true }}
							navigation={false}
							pagination={{
								clickable: true,
							}}
							autoplay={{
								delay: 2500,
								disableOnInteraction: true,
								pauseOnMouseEnter: true,
							}}
							modules={[Autoplay, EffectFade, Navigation, Pagination]}

							// slidesPerView={1}
						>
							<SwiperSlide>
								<SliderItem>Свежеобжаренный кофе</SliderItem>
							</SwiperSlide>
							<SwiperSlide>
								<SliderItem>Экзотические сорта</SliderItem>
							</SwiperSlide>
							<SwiperSlide>
								<SliderItem>Лучший выбор бариста</SliderItem>
							</SwiperSlide>
						</Swiper>
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
		</>
	);
};
