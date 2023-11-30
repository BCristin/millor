import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from './ProductClasificationBtn.module.scss';
export const ProductClasificationBtn = ({ titles, active }) => {
	const sectionRef = useRef(null);
	const [isSectionSticky, setIsSectionSticky] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			// Logica pentru elementul "sticky" din mijlocul paginii
			setIsSectionSticky(window.scrollY > sectionRef.current.offsetTop - 16);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	if (!active) {
		active = titles[0].link.slice(1);
	}

	return (
		<>
			<div ref={sectionRef} className={styles.not_exist}></div>
			<div className={cn(styles.sticky, { [styles.sticky__active]: isSectionSticky })}>
				<div className={'container'}>
					<div className={styles.buttons}>
						{titles.map((title, index) => (
							<a
								href={title.link}
								key={index}
								className={cn({ [styles.active]: title.link === '#' + active })}>
								{title.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
