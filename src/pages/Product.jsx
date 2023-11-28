import ky from 'ky';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductClasificationBtn } from '../components/ProductClasificationBtn/ProductClasificationBtn';
import { CardProductBig } from '../section/CardProductBig/CardProductBig';
import { InfoProduct } from '../section/InfoProduct/InfoProduct';
import { Reviews } from '../section/Reviews/Reviews';

export const Product = () => {
	const navigate = useNavigate();
	const [product, setProduct] = useState();
	const { id } = useParams();
	useEffect(() => {
		async function getProduct() {
			try {
				const json = await ky.get(`http://localhost:3001/product/${id}`).json();
				setProduct(json);
			} catch (error) {
				console.log(error);
				navigate('/');
			}
		}
		getProduct();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.log(product);
	if (!product) {
		return <div className="container">Loading...</div>;
	}
	return (
		<>
			<CardProductBig data={product} />
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
