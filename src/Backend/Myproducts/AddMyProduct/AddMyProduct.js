import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';
const AddMyProduct = () => {
	const [user] = useAuthState(auth);
	console.log(user.email);
	const handleAddProduct = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const description = e.target.description.value;
		const price = e.target.price.value;
		const quantity = e.target.quantity.value;
		const supplier = e.target.supplier.value;
		const review = e.target.review.value;
		const img = e.target.img.value;
		const url = 'https://boiling-basin-90703.herokuapp.com/product';
		fetch(url, {
		method: 'POST',
		body: JSON.stringify({title, description, price, quantity, supplier, review, img, email: user.email}),
		headers: {'Content-type': 'application/json; charset=UTF-8'},
		})
		.then((response) => response.json())
		.then(result => {
			console.log(result);
			toast.success("Product Insert Successfully");
			e.target.reset();
		});

	};
	return (
		<section className='add-product'>
			<div className="container">
				<div className="title text-softwhite">
					<h2>Add Product</h2>
				</div>
				<form onSubmit={handleAddProduct} className="row gx-2">
					<div className="col-lg-8 col-md-12 col-12">
						<div className="d-flex my-2">
							<input type="text" placeholder='Title' name='title' className='form-control' required/>
						</div>
						<div className="d-flex h-75">
							<textarea name="description" className='w-100 form-control' placeholder="Description" required></textarea>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-12 mt-lg-0 mt-4">
						<div className="d-flex gap-2 my-2">
							<input type="text" placeholder='price' name='price' className='form-control'required/>
							<input type="text" placeholder='quantity' name='quantity' className='form-control' required/>
						</div>
						<div className="d-flex gap-2 my-2">
							<input type="text" placeholder='supplier' name='supplier' className='form-control' required/>
							<input type="text" placeholder='review' name='review' className='form-control' required/>
						</div>
						<input type="text" placeholder='image link' name='img' className='form-control' required/>

						<button type='submit' className='mt-2 btn btn-danger w-100 text-uppercase'>Add Product</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default AddMyProduct;