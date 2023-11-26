import { useParams } from 'react-router-dom';
import { CardProductBig } from '../components/CardProductBig/CardProductBig';

export const Product = () => {
	const param = useParams();
	console.log(param.id);
	return (
		<>
			<div className="container">
				<CardProductBig />
			</div>
		</>
	);
};
