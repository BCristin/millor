import { useCallback, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardDiscound } from '../../components/CardDiscound/CardDiscound';
import { Title } from '../../components/Title/Title';
import styles from './Discount.module.scss';

export const Discount = () => {
	const [swiperRef, setSwiperRef] = useState();

	const handlePrevious = useCallback(() => {
		swiperRef?.slidePrev();
	}, [swiperRef]);

	const handleNext = useCallback(() => {
		swiperRef?.slideNext();
	}, [swiperRef]);
	return (
		<div className={styles.discount}>
			<Title className={styles.title}>Товары со скидкой</Title>
			<p className={styles.text}>
				Наша компания предлагает покупать товар со скидкой не только в дни распродаж или в течение
				действия ограниченных предложений, но и пользоваться скидками постоянно!
			</p>
			<div className={styles.cards}>
				<div className={styles.prev} onClick={handlePrevious}></div>
				<Swiper
					onSwiper={setSwiperRef}
					spaceBetween={0}
					slidesPerView={3}
					loop={true}
					centeredSlides={true}>
					<SwiperSlide>
						<CardDiscound />
					</SwiperSlide>
					<SwiperSlide>
						<CardDiscound />
					</SwiperSlide>
					<SwiperSlide>
						<CardDiscound />
					</SwiperSlide>
					<SwiperSlide>
						<CardDiscound />
					</SwiperSlide>
					<SwiperSlide>
						<CardDiscound />
					</SwiperSlide>
					<SwiperSlide>
						<CardDiscound />
					</SwiperSlide>
				</Swiper>
				<div className={styles.next} onClick={handleNext}></div>
			</div>
			<p className={styles.more}>Смотреть все</p>
		</div>
	);
};
