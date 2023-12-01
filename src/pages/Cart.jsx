import { CardCart } from '../section/CardCart/CardCart';
import { Delivery } from '../section/Delivery/Delivery';
import { TotalDelivery } from '../section/TotalDelivery/TotalDelivery.jsx';

export const Cart = () => {
	return (
		<>
			<CardCart />
			<Delivery />
			<TotalDelivery />
		</>
	);
};
