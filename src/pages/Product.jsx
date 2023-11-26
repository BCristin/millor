import { useParams } from 'react-router-dom';
import { CardProductBig } from '../components/CardProductBig/CardProductBig';
import { InfoProduct } from '../components/InfoProduct/InfoProduct';

export const Product = () => {
	const param = useParams();
	console.log(param.id);
	return (
		<>
			<CardProductBig />
			<InfoProduct></InfoProduct>
		</>
	);
};
