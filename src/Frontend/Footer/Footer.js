import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import bkash from '../../Assets/payment/bkash.png'
import dbbl from '../../Assets/payment/dbbl.png'
import './Footer.css';
const Footer = () => {
	return (
		<footer>
			<Container>
				<div className="row justify-content-between text-softwhite py-3">
					<div className="col-lg-3 col-md-6 col-12">
						<div className="footer-logo text-md-center">
							<img src={Logo} alt="" className='img-fluid'/>
						</div>
						<div className="d-flex align-items-center pt-3">
							<li><img src="https://i.imgur.com/Lu3wgaK.png" alt="android app" className="play-icon"/></li>
							<li><img src="https://i.imgur.com/QTkXVsg.png" alt="aaple app" className="apple-icon"/></li>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<h5>Manual Payment Option</h5>
						<nav>
							<li>
								<img src={bkash} alt="bkash"/>
								&nbsp;Bkash
								<p>Send Money: +880-1617-892323</p>
							</li>
							<li>
								<img src={dbbl} alt="bkash"/>
								&nbsp; DBBL
								<p>AC Name: Fasion House</p>
								<p>AC No: 196 105 45389</p>
							</li>
						</nav>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<h5>My account</h5>
						<nav>
							<li><Link to="/">My Order</Link></li>
							<li><Link to="/">My Information</Link></li>
							<li><Link to="/">Track Order</Link></li>
							<li><Link to="/">Return</Link></li>
							<li><Link to="/">Delivery</Link></li>
						</nav>
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						<h5>Cutomer service</h5>
						<nav>
							<li><Link to="/">Contact us</Link></li>
							<li><Link to="/">About us</Link></li>
							<li><Link to="/">Privacy Policy</Link></li>
							<li><Link to="/">Terms & Condition</Link></li>
							<li><Link to="/">Vendor</Link></li>
						</nav>
					</div>
				</div>
			</Container>
			<p className='text-softwhite text-center bg-fulldark my-0 pb-0 pt-1 fs-7'>&copy; 2022 All right reserved by fasionhouse.com</p>
		</footer>
	);
};

export default Footer;