import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Wishlist = () => {
	return (
		<section>
			<div className="container-fluid">
				 <div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-body">
								<div className="col-sm-12 text-center">
									<img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt='wishtlist'/>
									<h3><strong>Your WishList is Empty</strong></h3>
									<h4>Add something to make me happy</h4>
									<Link to="/" className="btn btn-primary text-uppercase m-3" data-abc="true">continue shopping</Link>
								</div>
							</div>
						</div>
					</div> 
				</div>
			</div>
		</section>
	);
};

export default Wishlist;