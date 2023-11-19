import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderItem } from '../SliderItem';

export const HeaderSlider = () => {
	return (
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
	);
};
