import React from 'react';
import TopNav from './TopNav';
import MainNav from './MainNav';
import BottomNav from './BottomNav';
import './Header.css';

const Header = () => {
	return (
		<header>
			<TopNav/>
			<MainNav/>
			<BottomNav/>
		</header>
	);
};

export default Header;