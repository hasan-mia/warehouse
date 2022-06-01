import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import auth from '../../Firebase/Firebase.init';
const BottomNav = () => {
	const [user] = useAuthState(auth);
	return (
		<>
		<Navbar className='bttomNav' expand="lg">
				<Container>
					<Navbar.Brand className='d-md-none' as={Link} to="/">
						<img src={Logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll">
						<i className="far fa-line-height"></i>
					</Navbar.Toggle>
					<Navbar.Collapse>
					{/* Left side Item */}
					<Nav className="me-auto my-2 my-lg-0 main-nav">
						<Link className='nav-link' to="/">Home</Link>
						<Link className='nav-link' to="/blogs">Blogs</Link>
						<Link className='nav-link' to="/about">About</Link>
						<Link className='nav-link' to="/contact">Contact</Link>
					</Nav>
					{
						!user? 
						<Nav className="ms-auto my-2 my-lg-0 main-nav">
							<Link className='nav-link text-warning fs-6' to="/">Please Login first To Manage Product</Link>
						</Nav>
						:
						<Nav className="ms-auto my-2 my-lg-0 main-nav">
							<Link className='nav-link text-warning' to="/manageProducts">Manage Product</Link>
							<Link className='nav-link text-warning' to="/myProducts">My Products</Link>
							<Link className='nav-link text-warning' to="/addProduct">Add Product</Link>
							<Link className='nav-link text-warning' to="/allBanner">All Banner</Link>
							<Link className='nav-link text-warning' to="/allBlog">All Blog</Link>
							<Link className='nav-link text-warning' to="/allCategory">All Category</Link>
							
						</Nav>
					}
					{/* Right side Item */}
					

					{/* Mobile Version Login */}
					{
					!user ?
					<Nav className='ms-auto my-2 my-lg-0 auth-nav d-lg-none right-md-nav'>
						<Nav.Link > <i className='fas fa-user-alt'></i> </Nav.Link>
						<Nav.Link as={Link} to="/login">Login</Nav.Link>
					</Nav>
					:
					<Nav className='ms-auto my-2 my-lg-0 auth-nav d-lg-none right-md-nav'>
						<Nav.Link as={Link} to="/user">{user.displayName? user?.displayName : user?.email}</Nav.Link>
						<Nav.Link onClick={() => signOut(auth)}>Logout</Nav.Link>
					</Nav>
					}
	
					</Navbar.Collapse>
				</Container>
		</Navbar>	
		</>
	);
};

export default BottomNav;