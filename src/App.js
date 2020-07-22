import React from 'react';
import './App.css';

import {GlobalProvider} from './context/GlobalState';

import ListUser from './pages/ListUser';
import Header from './pages/Header';

function App() {
	return (
		<div className="body">
			<GlobalProvider>
				<Header />
				<ListUser />
			</GlobalProvider>
		</div>
	);
}

export default App;
