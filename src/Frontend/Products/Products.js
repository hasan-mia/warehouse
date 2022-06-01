import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './Products.css'
const Products = () => {
	const {products} = useProducts();
	const productDetails = useNavigate()
	return (
		<div className="products"> 
			<div className="container"> 
				<div className="row gx-4 gy-3 align-items-center">
					{
						products?.reverse().slice(0, 6).map(product =>
							<div key={product._id} className="col-lg-4 col-md-6 col-12">
								<div className ="card p-2">
									<div className="p-info px-3 py-3"> 
										<div> 
											<h5 className="mb-0">{product?.title}</h5><span>{product?.supplier}</span> 
										</div> 
										<div className="p-price d-flex flex-row"> 
											<span>$</span> <h1>{product?.price}</h1> 
										</div> 
										<div className="heart"> 
											<i className="fas fa-heart"></i> 
										</div> 
									</div> 
									<div className="text-center p-image"> 
										<img src={product?.img} alt='product images'/> 
									</div> 
									<div className="p-about"> 
										<p>{product?.description?.slice(0, 100)}</p> 
									</div> 
									<div className="buttons d-flex flex-row gap-4 px-4"> 
										<button onClick={()=>productDetails(`/inventory/${product._id}`)} className="btn p-btn btn-danger w-100">Update</button> 
										<button className="btn p-btn btn-outline-danger w-100"> <i className="fas fa-cart-arrow-down"></i> Add Cart</button> 
									</div> 
								</div>
								{/* end card */}
							</div>
							)
					}
					
					<p className='text-center pt-5'><Link to='/manageProducts' className='btn btn-tranparent w-sm-100 w-lg-25'>Manage Inventories</Link></p>
				</div>
			</div>
		</div>
	);
};

export default Products;