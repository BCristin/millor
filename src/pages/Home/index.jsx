import { Footer } from '../../components/Footer/Footer.jsx';
import { HeaderSlider } from '../../components/HeaderSlider/index.jsx';
import { Menu } from '../../components/Menu/index.jsx';
import styles from './Home.module.scss';

export const index = () => {
	return <div className={styles}>index</div>;
};

export const Home = () => {
	return (
		<>
			<Menu></Menu>
			<header className={styles.header}>
				<div className="container">
					<div className={styles.header__inner}>
						<HeaderSlider></HeaderSlider>
						<svg
							className={styles.decor}
							width="1444"
							height="1740"
							viewBox="0 0 1444 1740"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M846.646 156.114C968.951 188.2 1108.59 132.457 1211.03 218.335C1328.09 316.478 1441.59 464.929 1443.01 656.09C1444.41 845.81 1297.73 989.54 1218 1159.62C1140.5 1324.96 1107.56 1532.9 982.984 1637.45C853.482 1746.13 692.386 1760.33 553.766 1717.07C421.909 1675.91 340.168 1530.53 247.04 1407.77C149.912 1279.73 -8.0201 1179.39 0.737125 988.062C9.59011 794.645 204.937 697.983 287.364 526.781C365.257 364.997 336.279 108.39 465.498 22.749C594.784 -62.9363 713.71 121.239 846.646 156.114Z"
								fill="#F9B300"
							/>
						</svg>
					</div>
				</div>
			</header>
			<main className="main">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illum harum et deleniti.
				Quis, odit. A suscipit porro, delectus repudiandae natus aliquam autem quibusdam alias
				praesentium adipisci harum debitis iste possimus, velit facere qui nostrum sapiente expedita
				magni voluptatibus rem at earum accusantium. Voluptates labore incidunt quibusdam
				exercitationem at corrupti, molestiae aliquam ipsa repellat expedita maiores ea qui dolore
				rerum, rem beatae dolor dignissimos officia veniam ratione eius! Aperiam neque, soluta
				accusamus deleniti laborum dolor perferendis quod quibusdam quo explicabo, ab ipsa officiis
				deserunt similique praesentium provident! Alias, architecto. Quibusdam, quasi eius nostrum
				nihil possimus labore esse! Tempore, iure quo. Explicabo vitae dicta pariatur saepe fugiat
				exercitationem ab quae laudantium, possimus non illo, et, harum molestias deserunt
				doloremque cum maiores quis? Nostrum eius id, quod nisi culpa consectetur ad explicabo
				voluptatum repudiandae doloribus labore beatae perspiciatis velit a harum nobis, molestias,
				soluta sapiente corrupti dolor iusto natus. Minima consequatur est consequuntur animi esse
				quam deleniti unde iste? Mollitia iusto minus obcaecati aliquam, dolore at neque iste unde
				quo corporis aperiam deleniti nihil, cupiditate voluptate incidunt, deserunt inventore
				asperiores maxime nulla? Quis, explicabo. Quis incidunt rerum, voluptatum, nisi voluptates
				quaerat nostrum mollitia molestiae dignissimos unde eveniet saepe totam doloremque non
				nobis, amet nulla. Ducimus alias pariatur magnam sed dolores, placeat hic modi ea sunt
				voluptatem asperiores dolorum tempora assumenda velit? Doloremque sit fuga facilis minima
				totam magni nostrum expedita, et dolorum enim excepturi, omnis eaque, iusto voluptates
				deleniti explicabo architecto iure mollitia. Eveniet rerum vero voluptatum recusandae
				doloribus nostrum placeat obcaecati tempora eligendi molestias, vel facere quas beatae dolor
				similique voluptates culpa atque numquam, alias qui. Voluptas unde esse nemo nisi
				voluptatibus pariatur officiis iusto, culpa suscipit nulla rerum tenetur excepturi sequi
				animi obcaecati ipsam id voluptatum commodi autem ad nesciunt! Impedit unde quibusdam
				necessitatibus reiciendis quisquam accusantium modi accusamus aspernatur, corrupti natus?
				Consectetur nisi nam est blanditiis voluptates aut nemo ipsa! Consequatur minus repellat
				recusandae ut, distinctio repellendus soluta, quod ipsa nulla mollitia laboriosam dolores
				voluptatum quae quibusdam at architecto praesentium porro voluptatem voluptate magni. Quidem
				obcaecati expedita magnam ut eum vero dolorem facere ipsa quis dignissimos, saepe autem unde
				quas blanditiis tempora inventore laborum quia nihil consectetur consequuntur explicabo?
				Saepe reiciendis modi nulla. Magnam veniam aut harum illum explicabo, quo cumque sapiente
				quae. Dolorem rerum cumque excepturi eaque saepe quisquam sit architecto placeat soluta.
				Quisquam reprehenderit unde doloremque ea sit asperiores perspiciatis vitae aliquam sunt
				inventore quia accusantium tenetur quis, consectetur iusto, eos hic, eum commodi rerum quos
				dolor sint qui. Enim maxime ipsa repellat dolorem aliquam, aliquid alias accusamus
				consequuntur, soluta in veniam non? Nisi, cumque voluptate dicta illo quo pariatur enim
				omnis, debitis veritatis, non eveniet sunt. Maxime distinctio, quidem eligendi iste cum
				aspernatur sit maiores, temporibus quaerat dicta possimus debitis in nesciunt illum eum
				provident, similique numquam fugit quam quisquam. Molestiae tempore vero culpa, dignissimos
				praesentium magni veniam natus aspernatur soluta neque inventore. Nostrum, beatae architecto
				voluptatum sapiente veritatis blanditiis reiciendis sit similique enim laboriosam ab quae
				inventore ex explicabo excepturi hic adipisci! Eum, iure beatae.
			</main>
			<footer className="footer">
				<Footer></Footer>
			</footer>
		</>
	);
};
