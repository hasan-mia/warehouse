import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
const MainNav = () => {
	return (
		<>
			<Navbar expand="lg" className='mainNav bg-darkblue sticky-top'>
				<Container>
					<Navbar.Brand className='d-none d-md-block' as={Link} to="/">
						<img src={Logo} alt="" />
					</Navbar.Brand>
					<Form className="d-flex search-form">
						<FormControl
						type="search"
						placeholder="Search here..."
						className="me-2 w-100 search-input"
						aria-label="Search"
						/>
						<Button variant="search-submit"> <i className='fas fa-search'></i> </Button>
					</Form>

					<div className="ms-auto h-tag">
						<h5>Free Shipping EveryDay</h5>
						<p>Get 20% Free All Time</p>
					</div>

					<Nav className="ms-auto my-2 my-lg-0 right-nav">
						<Link className='nav-link' to="/wishlist"> My Favorite <i className='fas fa-heart'></i> 
						<span className='position-absolute badge cart-count'>
							0
						</span >
						</Link>
						<Link className='nav-link' to = "/cart" > My Bag <i className ='fas fa-cart-arrow-down' > </i> 
						<span className='position-absolute badge cart-count'>
							0
						</span > 
						</Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default MainNav;