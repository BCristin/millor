import { useState } from 'react';
import styles from './Contact.module.scss';

export const Contact = () => {
	const [activeSection, setActiveSection] = useState(1);

	return (
		<div className={styles.contact}>
			<div className={'container'}>
				<div className={styles.buttons}>
					<button
						onClick={() => setActiveSection(1)}
						className={activeSection === 1 && styles.active}>
						Контакты
					</button>
					<button
						onClick={() => setActiveSection(2)}
						className={activeSection === 2 && styles.active}>
						Наши магазины
					</button>
				</div>
				<div className={styles.inner}>
					{activeSection === 1 ? (
						<div className={styles.info}>
							<div className={styles.title}>Связаться с нами:</div>
							<p className={styles.text}>
								<a href="tel:+7012375343">+7 (401) 237 53 43</a>
								<a href="mailto:Import@kldrefine.com">Import@kldrefine.com</a>
							</p>
							<div className={styles.title}>Юридический адрес:</div>
							<p className={styles.text}>
								Российская, Федерация, 238310, Калининградская область, Гурьевский район, поселок
								Васильково, улица Шатурская, дом 4А
							</p>
							<div className={styles.title}>Адрес склада:</div>
							<p className={styles.text}>
								Московская область, Балашиха, Западная промзона, Шоссе энтузиастов 1
							</p>
						</div>
					) : (
						<div className={styles.magazin}>
							<div className={styles.title}>Наши магазины г. Санкт-Петербург</div>
							<p className={styles.text}>
								Гороховая, 53 <br />
								Московский, 53
							</p>
							<div className={styles.title}>Наши магазины Калининградская обл.</div>
							<p className={styles.text}>
								Советск, Гончарова 2а <br />
								Черняховск, Пионерская 1 <br />
								Ульяны-Громовой 15 <br />
								Советский проспект 6а <br />
								Гурьевск, Каштановая 1г <br />
								Черняховского 15 <br />
								Панина 2а <br />
								Ленинский 8Б <br />
								Аксакова 133 <br />
								Липовая Аллея 2
							</p>
						</div>
					)}
					<div className={styles.map}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36856.96514959218!2d20.500862203463413!3d54.73494829399488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e3159407f19b15%3A0x3ad9e25b3ceef37b!2sApartment%20na%20Arsenalnoy!5e0!3m2!1sro!2s!4v1701364010182!5m2!1sro!2s"
							width="960"
							height="526"
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="ca trebuie sa fie "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
