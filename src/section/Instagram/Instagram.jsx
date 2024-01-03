import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import phone from '../../assets/images/instagram/phone.png';
import imgSlider from '../../assets/images/instagram/post.jpg';
import { Title } from '../../components/Title/Title';
import styles from './Instagram.module.scss';

export const Instagram = () => {
	return (
		<div className={styles.instagram}>
			<div className={'container'}>
				<div className={styles.instagram__inner}>
					<Title className={styles.title}>Мы в Instagram</Title>
					<div className={styles.instagram__content}>
						<img src={phone} alt="" className={styles.phone} />
						<div className={styles.post}>
							<Swiper
								modules={[Grid, Navigation]}
								spaceBetween={20}
								slidesPerView={3}
								navigation={true}
								grid={{ rows: 2, fill: 'row' }}>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
