import { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { ProductClasificationBtn } from '../components/ProductClasificationBtn/ProductClasificationBtn';
import styles from '../section/CardProductBig/CardProductBig.module.scss';
import { NewsBlog } from '../section/NewsBlog/NewsBlog';
import { Quests } from '../section/Quests/Quests';
import { Training } from '../section/Training/Training';

export const Blog = () => {
	const btns = [
		{ name: 'Обучение', link: '#training' },
		{ name: 'Новости', link: '#news' },
		{ name: 'Частые вопросы', link: '#quests' },
	];

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

	return (
		<>
			<div className="container">
				<Breadcrumbs className={styles.breadcrumbs} />
			</div>
			<ProductClasificationBtn titles={btns} active={activeSection} />
			<Training idhref={btns[0].link} />
			<NewsBlog idhref={btns[1].link} />
			<Quests idhref={btns[2].link} />
		</>
	);
};
