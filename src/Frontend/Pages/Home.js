import React from 'react';
import Banners from '../Banners/Banners';
import Categories from '../Categories/Categories';
import Newslatter from '../Newslatter/Newslatter';
import Products from '../Products/Products';
import './Pages.css'
const Home = () => {
	return (
		<main>
			<Banners></Banners>
			<Categories></Categories>
			<Products></Products>
			<Newslatter></Newslatter>
		</main>
	);
};
export default Home;