import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { productContext } from '../../App';
import './Products.css'
const Product = () => {
	const {id} = useParams();
	const {products, isReload, setIsReload} = useContext(productContext);
	// Get Specific Item by ID
 	const product = products.find(item => item._id === id);
	const {title, description, price, img, supplier, review, quantity, _id} = product;
	console.log(typeof product?.quantity);
	// Handle Restock Product
	const handleRestock = (e) => {
		e.preventDefault();

		const quantity = parseInt(product?.quantity) + parseInt(e.target.updatequantity.value);
		
		const url = `https://boiling-basin-90703.herokuapp.com/quantity/${id}`;
		fetch(url, {
		method: 'PUT',
		body: JSON.stringify({quantity}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		})
		.then((response) => response.json())
		.then(data => {
			console.log('success', data);
			setIsReload(!isReload);
			toast.success("Quantity Updated Successfully");
		});

	};

	// Handle Delivered Product
	const handleDelivered = () => {
		const quantity = (product?.quantity) > 0 ? (product?.quantity) - 1 : (product?.quantity);
		const url = `https://boiling-basin-90703.herokuapp.com/quantity/${id}`;
		fetch(url, {
			method: 'PUT',
			body: JSON.stringify({quantity}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		.then((response) => response.json())
		.then(data => {
			console.log('success', data);
			setIsReload(!isReload);
			toast.success("Product Delivered Successfully");
		});

	};
	
	return (
		<section className='py-2'>
			<div className="container">
				<div className="product text-softwhite">
					<div className="row">
						<div className="col-md-9">
							<div className="row">
								<div className="col-md-7">
									<div className="d-flex justify-content-between">
										<h2>{title}</h2>
										<h3><span>$</span>{price}</h3>
									</div>
									<p>Product of: {supplier}</p>

									<div className="details">
										<p>{description}</p>
									</div>
								</div>
								<div className="col-md-5">
									<h6 className='text-uppercase text-center mt-lg-0 mt-2'>Product ID: {_id}</h6>
									<img src={img} alt='product images' className='product-images'/> 

									<div className="d-flex justify-content-between pt-2">
										<div className="review text-warning">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<span>{review}</span>
											<p>Based on 250 Review</p>
										</div>
										<div className="available">
											<h6>Stock: {quantity}</h6>
										</div>
									</div>
									<form onSubmit={handleRestock} className="d-flex flex-row my-2 justify-content-between">
										<input type="text" name='updatequantity' className="input-number" placeholder={quantity} />
										<button type='submit' className="btn p-btn btn-outline-darkblue w-100 text-softwhite"><i className="fal fa-bags-shopping"></i> Restock</button>
									</form>
									<div className="d-flex flex-row mt-3 justify-content-center">
										{/* <button className="btn p-btn btn-outline-darkblue w-100 text-softwhite"> <i className="fas fa-cart-arrow-down"></i> Add Cart</button>  */}
										<button onClick={handleDelivered} className="btn p-btn btn-outline-darkblue w-100 text-softwhite"> <i className="fal fa-luggage-cart"></i> Delivered</button> 
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3 col-12"> 
							< nav className = 'quality mt-lg-0 mt-3' >
								<li>100% Quality</li>
								<li>Free Shipping</li>
								<li>Easy Returns</li>
								<li>EMI Starting from (On Credit Cards)</li>
								<li>Normal Delivery : 4-5 Days</li>
								<li>Express Delivery : 2-3 Days</li>
								<li>COD Available (All Over Bangladesh)</li>
							</nav>

						</div>
					</div>
				</div>
				
			</div>
		</section>
	);
};
export default Product;