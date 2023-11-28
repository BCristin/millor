import { useParams } from 'react-router-dom';
import { ProductClasificationBtn } from '../components/ProductClasificationBtn/ProductClasificationBtn';
import { CardProductBig } from '../section/CardProductBig/CardProductBig';
import { InfoProduct } from '../section/InfoProduct/InfoProduct';
import { Reviews } from '../section/Reviews/Reviews';

export const Product = () => {
	const param = useParams();
	console.log(param.id);
	return (
		<>
			<CardProductBig />
			<ProductClasificationBtn
				titles={[
					{ name: 'Описание', link: '#desciption' },
					{ name: 'Как готовить?', link: '#how_to_cook' },
					{ name: 'Дополнительно', link: '#additionally' },
					{ name: 'Отзывы', link: '#reviews' },
				]}></ProductClasificationBtn>
			<InfoProduct></InfoProduct>
			<Reviews></Reviews>
		</>
	);
};
