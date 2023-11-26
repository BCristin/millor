import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.scss';
import { MainLayout } from './layout/MainLayout';
import { CatalogCereal } from './pages/CatalogCereal';
import { CatalogCoffe } from './pages/CatalogCoffe';
import { CatalogMachine } from './pages/CatalogMachine';
import { CatalogTea } from './pages/CatalogTea';

import { Home } from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/coffe" element={<CatalogCoffe />} />
					<Route path="/tea" element={<CatalogTea />} />
					<Route path="/machine" element={<CatalogMachine />} />
					<Route path="/cereal" element={<CatalogCereal />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
