import React from 'react';
import './Newslatter.css';
const Newslatter = () => {
	return (
		<section>
			<div className="d-flex justify-content-center pt-5 pb-5 newsletter">
				<input type="email" placeholder='Enter your email' className='py-2 px-2 w-md-33 w-75 subscribe-input'/>
				<button className='text-uppercase btn btn-warning subscribe-btn'> subscribe us </button>
			</div>
		</section>
	);
};

export default Newslatter;