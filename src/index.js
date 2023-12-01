import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import './global.scss';
import { MainLayout } from './layout/MainLayout';
import { Blog } from './pages/Blog';
import { Cart } from './pages/Cart';
import { CatalogCereal } from './pages/CatalogCereal';
import { CatalogCoffe } from './pages/CatalogCoffe';
import { CatalogMachine } from './pages/CatalogMachine';
import { CatalogTea } from './pages/CatalogTea';
import { Contacts } from './pages/Contacts';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { User } from './pages/User';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/coffe" element={<CatalogCoffe />} />
					<Route path="/tea" element={<CatalogTea />} />
					<Route path="/machine" element={<CatalogMachine />} />
					<Route path="/cereal" element={<CatalogCereal />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contacts />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/user" element={<User />} />

					<Route path="/cereal/:id" element={<Product />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
