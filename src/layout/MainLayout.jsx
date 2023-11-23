import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from '../components/Menu/index.jsx';
import { PopupForgot } from '../components/Modals/PopupForgot/PopupForgot.jsx';
import { PopupLogin } from '../components/Modals/PopupLogin/PopupLogin.jsx';
import { PopupRegiste } from '../components/Modals/PopupRegiste/PopupRegiste.jsx';
import { PopupVerficationCode } from '../components/Modals/PopupVerficationCode/PopupVerficationCode.jsx';
import { Footer } from '../section/Footer/Footer.jsx';
import { Subscribe } from '../section/Subscribe/Subscribe.jsx';
export const MainLayout = () => {
	const [isOpenRegister, setIsOpenRegister] = useState(false);
	const [isOpenLogin, setIsOpenLogin] = useState(false);
	const [isOpenForgot, setIsOpenForgot] = useState(false);
	const [isOpenVerificationCode, setIsOpenVerificationCode] = useState(false);

	return (
		<>
			<Menu setIsOpen={setIsOpenRegister}></Menu>
			<main className="main">
				<Outlet />
			</main>
			<footer className="footer">
				<Subscribe></Subscribe>
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
					setIsOpenSucces={setIsOpenVerificationCode}
				/>
			)}
			{isOpenVerificationCode && (
				<PopupVerficationCode
					setIsOpen={setIsOpenVerificationCode}
					setIsOpenSecondModal={setIsOpenRegister}
					setIsOpenLink={setIsOpenLogin}
				/>
			)}
		</>
	);
};
