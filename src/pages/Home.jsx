import { useState } from 'react';
import { PopupForgot } from '../components/Modals/PopupForgot/PopupForgot.jsx';
import { PopupLogin } from '../components/Modals/PopupLogin/PopupLogin.jsx';
import { PopupRegiste } from '../components/Modals/PopupRegiste/PopupRegiste.jsx';
import { PopupVerficationCode } from '../components/Modals/PopupVerficationCode/PopupVerficationCode.jsx';
import { Benefits } from '../section/Benefits/Benefits.jsx';
import { Catalog } from '../section/Catalog/Catalog.jsx';
import { Discount } from '../section/Discount/Discount.jsx';
import { Footer } from '../section/Footer/Footer.jsx';
import { Header } from '../section/Header/Header.jsx';
import { Instagram } from '../section/Instagram/Instagram.jsx';
import { News } from '../section/News/News.jsx';
import { Roasting } from '../section/Roasting/Roasting.jsx';
import { Subscribe } from '../section/Subscribe/Subscribe.jsx';

export const Home = () => {
	const [isOpenRegister, setIsOpenRegister] = useState(false);
	const [isOpenLogin, setIsOpenLogin] = useState(false);
	const [isOpenForgot, setIsOpenForgot] = useState(false);
	const [isOpenVerificationCode, setIsVerificationCode] = useState(false);

	return (
		<>
			<Header setIsOpen={setIsOpenRegister}></Header>
			<div className="testzone"></div>
			<main className="main">
				<div className="container">
					<Catalog></Catalog>
					<Discount></Discount>
				</div>
				<Benefits></Benefits>
				<Roasting></Roasting>
				<News></News>
				<Instagram></Instagram>
				<Subscribe></Subscribe>
			</main>
			<footer className="footer">
				<Footer></Footer>
			</footer>

			{isOpenRegister && (
				<PopupRegiste setIsOpen={setIsOpenRegister} setIsOpenSecondModal={setIsOpenLogin} />
			)}
			{isOpenLogin && (
				<PopupLogin
					setIsOpen={setIsOpenLogin}
					setIsOpenSecondModal={setIsOpenRegister}
					setIsOpenLink={setIsOpenForgot}
				/>
			)}
			{isOpenForgot && (
				<PopupForgot
					setIsOpen={setIsOpenForgot}
					setIsOpenSecondModal={setIsOpenRegister}
					setIsOpenLink={setIsOpenLogin}
					setIsOpenSucces={setIsVerificationCode}
				/>
			)}
			{isOpenVerificationCode && (
				<PopupVerficationCode
					setIsOpen={setIsVerificationCode}
					setIsOpenSecondModal={setIsOpenRegister}
					setIsOpenLink={setIsOpenLogin}
				/>
			)}
		</>
	);
};
