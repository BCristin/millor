import { useParams } from 'react-router-dom';
import { CardProductBig } from '../section/CardProductBig/CardProductBig';
import { InfoProduct } from '../section/InfoProduct/InfoProduct';
import { Reviews } from '../section/Reviews/Reviews';

export const Product = () => {
	const param = useParams();
	console.log(param.id);
	return (
		<>
			<CardProductBig />
			<InfoProduct></InfoProduct>
			<Reviews></Reviews>
		</>
	);
};
