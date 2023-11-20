import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import phone from '../../assets/images/instagram/phone.png';
import imgSlider from '../../assets/images/instagram/post.jpg';
import { Title } from '../../components/Title/Title';
import styles from './Instagarm.module.scss';

export const Instagarm = () => {
	return (
		<div className={styles.instagram}>
			<div className="container">
				<div className={styles.instagram__inner}>
					<Title className={styles.title}>Мы в Instagram</Title>
					<div className={styles.instagram__content}>
						<img src={phone} alt="" className={styles.phone} />
						<div className={styles.post}>
							<Swiper
								className="mySwiper"
								modules={[Grid]}
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
								</SwiperSlide>{' '}
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>{' '}
								<SwiperSlide>
									<img src={imgSlider} alt="" />
								</SwiperSlide>
							</Swiper>
						</div>

						{/* <Swiper
							slidesPerView={3}
							grid={{
								rows: 2,
							}}
							spaceBetween={20}
							modules={[Grid]}>
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>{' '}
							<SwiperSlide>
								<img src={imgSlider} alt="" />
							</SwiperSlide>
						</Swiper> */}
					</div>
				</div>
			</div>
		</div>
	);
};
