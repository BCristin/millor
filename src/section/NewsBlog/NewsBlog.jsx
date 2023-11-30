import img from '../../assets/images/news/news-img.jpg';
import { PMore } from '../../components/PMore/PMore';
import styles from './NewsBlog.module.scss';

export const NewsBlog = ({ idhref }) => {
	return (
		<section className={styles.newsblog} id={idhref.slice(1)}>
			<div className={'container'}>
				<div className={styles.top}>
					<div className={styles.title}>Новости:</div>
					<div className={styles.tag}>
						<button className={styles.active}>Тег №1</button>
						<button>Тег №2</button>
						<button>Тег №3</button>
						<button>Тег №4</button>
						<button>Тег №5</button>
						<button>Тег №6</button>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={img} alt="" />
						</div>
						<div className={styles.info}>
							<div className={styles.title}>
								Танзанийский кофе. Откуда он взялся и почему мы его так любим?
							</div>
							<div className={styles.text}>
								Танзания – красивая африканская страна. Именно здесь расположены легендарные
								географические объекты – вулкан Килиманджаро и озеро Виктория.
								<br />
								<br /> Но наш интерес вызван не столько природными красотами, сколько кофе...
							</div>
							<div className={styles.inner}>
								<div className={styles.authore}>Автор статьи: Иван Иванов</div>
								<PMore>Подробнее</PMore>
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={img} alt="" />
						</div>
						<div className={styles.info}>
							<div className={styles.title}>
								Танзанийский кофе. Откуда он взялся и почему мы его так любим?
							</div>
							<div className={styles.text}>
								Танзания – красивая африканская страна. Именно здесь расположены легендарные
								географические объекты – вулкан Килиманджаро и озеро Виктория.
								<br />
								<br /> Но наш интерес вызван не столько природными красотами, сколько кофе... Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Dolorem explicabo alias, natus
								consequuntur minus debitis optio quos inventore dolor doloremque, odio totam earum
								tempora non nulla ex deleniti nemo. Fugit ea blanditiis nemo eos illum illo expedita
								modi numquam, magni nam accusamus voluptates sapiente libero. Beatae tempore unde
								illo ratione est temporibus a odio corporis, optio tenetur non nostrum magni dolor
								autem? Doloremque, dolorum deserunt quaerat dolor nobis natus officiis, temporibus
								neque ab, ipsa aliquid. Accusantium optio similique odit qui totam rem, et nesciunt
								voluptatem quae libero quidem, molestias quibusdam nostrum possimus sequi est,
								recusandae sunt officia. Error beatae quae sed natus temporibus tenetur veritatis
								quasi debitis illo dolorem soluta illum vel unde quis ipsa laborum pariatur, autem
								nobis officiis cumque deleniti. Unde vel hic impedit dolor, ipsam commodi
								reprehenderit tempora blanditiis asperiores laboriosam placeat modi porro quam
								dolore quaerat ipsa adipisci, atque quas velit minus inventore eaque esse. Ullam
								amet, minus at voluptas eaque ducimus optio repellendus cupiditate? In enim aliquid
								consectetur tenetur qui nostrum veniam earum hic provident nihil maxime amet, nisi
								officiis distinctio rerum deleniti esse tempora perspiciatis expedita nulla eligendi
								dolorem reprehenderit? Nulla deserunt ratione magni expedita at cumque accusantium
								consectetur a, dolores ducimus odio. Id aut molestiae ratione nulla consequatur
								excepturi eveniet blanditiis deleniti delectus incidunt atque eos molestias rem
								mollitia aspernatur dolor perspiciatis dicta eum, sapiente minus dolorem. Iure
								adipisci iste error sed perspiciatis impedit nemo soluta eaque exercitationem beatae
								eius voluptates commodi, animi minima aut porro quia alias a? Distinctio, impedit
								placeat eos molestiae pariatur id modi mollitia optio dolore cum quidem suscipit
								blanditiis at nostrum commodi veniam voluptas ad vitae fugiat maxime itaque facilis
								sequi! Alias explicabo magni tenetur laudantium quibusdam voluptatum sequi cumque
								odio, quae quia quas praesentium eveniet, at fugit iure accusantium repellendus sunt
								quidem corporis porro est beatae. Quisquam voluptatem consequatur soluta corporis
								rerum, minima perspiciatis sequi, ducimus maxime aliquam dolorum voluptates vel
								suscipit a. Vero quidem quisquam sit, fugiat facilis iste esse, optio nisi explicabo
								minima fugit at perspiciatis recusandae voluptatum aliquid? Minima quae accusantium
								id qui nihil error quo alias cupiditate fugiat unde? Incidunt animi quidem
								voluptatem impedit maxime optio officiis alias tenetur. Blanditiis quis ut officiis
								deleniti nesciunt, quo consectetur recusandae libero ea alias expedita molestiae non
								fuga dolore distinctio quos temporibus! Assumenda dignissimos sed maiores nesciunt
								dolor commodi autem amet placeat, mollitia odit fugiat omnis at asperiores expedita
								modi corrupti alias! Ex in nulla aliquam quaerat quidem, at harum sequi ea facere
								aspernatur quos sint, id laboriosam vel inventore aliquid odit reiciendis. Quo,
								culpa earum! Dicta non temporibus voluptate numquam quod? Nulla debitis ab iure a
								itaque expedita. Ex odit, veniam aspernatur alias aut libero magni voluptatibus modi
								consectetur adipisci error, suscipit ducimus labore ipsa. Laudantium numquam
								distinctio nihil cum reprehenderit accusamus aliquam dolor, dolorum nobis repellat,
								illo voluptas illum. Molestiae praesentium exercitationem deleniti at obcaecati,
								iure quia corporis sint distinctio, eligendi maiores fugiat, rem a ea nulla ut
								similique autem in quis quos. Explicabo nam a quidem vero esse! Natus officiis odit
								quia quidem!
							</div>
							<div className={styles.inner}>
								<div className={styles.authore}>Автор статьи: Иван Иванов</div>
								<PMore>Подробнее</PMore>
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.img}>
							<img src={img} alt="" />
						</div>
						<div className={styles.info}>
							<div className={styles.title}>
								Танзанийский кофе. Откуда он взялся и почему мы его так любим?
							</div>
							<div className={styles.text}>
								Танзания – красивая африканская страна. Именно здесь расположены легендарные
								географические объекты – вулкан Килиманджаро и озеро Виктория.
								<br />
								<br /> Но наш интерес вызван не столько природными красотами, сколько кофе...
							</div>
							<div className={styles.inner}>
								<div className={styles.authore}>Автор статьи: Иван Иванов</div>
								<PMore>Подробнее</PMore>
							</div>
						</div>
					</div>
				</div>
				<button className={styles.button}>Показать еще</button>
			</div>
		</section>
	);
};
