import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { productContext } from '../../../App';

const UpdateProduct = () => {
	const {id} = useParams();
	const {products} = useContext(productContext);
	// Get Specific Item With ID
 	const product = products.find(item => item._id === id);
	const {title, description, price, img, supplier, review, quantity} = product;

	const handleUpdateProduct = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const description = e.target.description.value;
		const price = e.target.price.value;
		const quantity = e.target.quantity.value;
		const supplier = e.target.supplier.value;
		const review = e.target.review.value;
		const img = e.target.img.value;
		// console.log(title, description, price, quantity, supplier, review, img);
		const url = `https://boiling-basin-90703.herokuapp.com/product/${id}`;
		fetch(url, {
		method: 'PUT',
		body: JSON.stringify({title, description, price, quantity, supplier, review, img}),
		headers: {'Content-type': 'application/json; charset=UTF-8'},
		})
		.then((response) => response.json())
		.then(result => {console.log('success', result);
			toast.success("Update Product Successfully");
			e.target.reset();
		});

	};
	return (
		<section className='add-product'>
			<div className="container">
				<div className="title text-softwhite">
					<h2>Update</h2>
				</div>
				<form onSubmit={handleUpdateProduct} className="row gx-2">
					<div className="col-lg-8 col-md-12 col-12">
						<div className="d-flex my-2">
							<input type="text" placeholder={title} name='title' className='form-control' required/>
						</div>
						<div className="d-flex h-75">
							<textarea placeholder={description} name="description" className='w-100 form-control' required></textarea>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-12 mt-lg-0 mt-4">
						<div className="d-flex gap-2 my-2">
							<input type="text" placeholder={price} name='price' className='form-control' required/>
							<input type="text" placeholder={quantity} name='quantity' className='form-control' required/>
						</div>
						<div className="d-flex gap-2 my-2">
							<input type="text" placeholder={supplier} name='supplier' className='form-control' required/>
							<input type="text" placeholder={review} name='review' className='form-control' required/>
						</div>
						<input type="text" placeholder={img} name='img' className='form-control' required/>

						<button type='submit' className='mt-2 btn btn-danger w-100 text-uppercase'>Update Product</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default UpdateProduct;