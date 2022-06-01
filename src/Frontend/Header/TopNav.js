import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/Firebase.init';

const TopNav = () => {
	const [user] = useAuthState(auth);
	return (
		<>
		<Navbar className='topNav'>
			<Container>
				<Nav className='me-auto email'>
					Emai: info@faionhouse.com
				</Nav>
				{
					!user ?
					<Nav className='ms-auto auth-link'>
						<Nav.Link > <i className='fas fa-user-alt'></i> | </Nav.Link>
						<Nav.Link as={Link} to="/login">Login</Nav.Link>
					</Nav>
					:
					<Nav className='ms-auto auth-link'>
						<Nav.Link as={Link} to="/user">{user.displayName? user?.displayName : user?.email} &nbsp;|</Nav.Link>
						<Nav.Link onClick={() => signOut(auth)}>Logout</Nav.Link>
					</Nav>
				}
			</Container>
		</Navbar>
		</>
	);
};

export default TopNav;