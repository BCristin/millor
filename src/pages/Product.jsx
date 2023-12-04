import ky from 'ky';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductClasificationBtn } from '../components/ProductClasificationBtn/ProductClasificationBtn';
import { CardProductBig } from '../section/CardProductBig/CardProductBig';
import { Additionally } from '../section/InfoProduct/Additionally';
import { Description } from '../section/InfoProduct/Description';
import { HowToCook } from '../section/InfoProduct/HowToCook';
import { Reviews } from '../section/Reviews/Reviews';

export const Product = () => {
	const navigate = useNavigate();
	const [product, setProduct] = useState();
	const { id } = useParams();
	useEffect(() => {
		async function getProduct() {
			try {
				const json = await ky
					.get(`https://6568d55b9927836bd9757ce4.mockapi.io/product/${id}`)
					// .get(`http://192.168.0.36:3001/product/${id}`).json();
					.json();
				setProduct(json);
			} catch (error) {
				console.log(error);
				navigate('/');
			}
		}
		getProduct();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const isCoffe = product?.type === 'coffe';

	const btns = [
		{ name: 'Описание', link: '#desciption' },
		{ name: 'Как готовить?', link: '#how_to_cook' },
		{ name: 'Отзывы', link: '#reviews' },
	];

	if (isCoffe) btns.splice(-1, 0, { name: 'Дополнительно', link: '#additionally' });

	const [activeSection, setActiveSection] = useState('');
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 285; // Ajustează după nevoie
			const sections = document.querySelectorAll('section');

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionBottom = sectionTop + section.offsetHeight;

				if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
					setActiveSection(section.id);
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (!product) {
		return <div className={'container'}>Loading...</div>;
	}
	return (
		<>
			<CardProductBig data={product} />
			<ProductClasificationBtn titles={btns} active={activeSection}></ProductClasificationBtn>
			<Description
				data={product.description}
				img={product.internal || product.img}
				isCoffe={isCoffe}></Description>
			<HowToCook text={product.how_to_cook?.text} isCoffe={isCoffe}></HowToCook>
			{isCoffe && <Additionally></Additionally>}
			<Reviews></Reviews>
		</>
	);
};
