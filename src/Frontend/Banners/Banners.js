import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import useBanners from '../../Hooks/useBanners'
import './Banner.css';

const Banners = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	
	const {banners} = useBanners();
	return (
		<div className='container my-2'>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				{
					banners?.map(banner=>
					<Carousel.Item key={banner._id}>
						<img className="d-block w-100 img-fluid" src={banner.img} alt="First slide"/>
					{/* <Carousel.Caption>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</Carousel.Caption> */}
					</Carousel.Item>)
				}
			</Carousel>
		</div>
	);
};

export default Banners;