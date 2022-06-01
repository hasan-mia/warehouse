import React from 'react';
import { toast } from 'react-toastify';
const AddBanner = () => {
	const handleAddBanner = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const description = e.target.description.value;
		const img = e.target.img.value;

		const url = 'https://boiling-basin-90703.herokuapp.com/banner';
		fetch(url, {
		method: 'POST',
		body: JSON.stringify({title, description, img}),
		headers: {'Content-type': 'application/json; charset=UTF-8'},
		})
		.then((response) => response.json())
		.then(result => {
			console.log(result);
			toast.success("Banner Insert Successfully");
			e.target.reset();
		});

	};
	return (
		<section className='add-product'>
			<div className="container">
				<div className="title text-softwhite">
					<h2>Add Banner</h2>
				</div>
				<form onSubmit={handleAddBanner} className="row gx-2">
					<div className="col-lg-8 col-md-12 col-12">
						<div className="d-flex my-2">
							<input type="text" placeholder='Title' name='title' className='form-control' required/>
						</div>
						<div className="d-flex h-75">
							<textarea name="description" className='w-100 form-control' placeholder="Description" required></textarea>
						</div>
					</div>
					<div className="col-lg-4 col-md-12 col-12 mt-lg-0 mt-4">
						<div className="d-flex flex-column mt-2">
							<input type="text" placeholder='image link' name='img' className='form-control' required/>
						</div>
						<button type='submit' className='mt-2 btn btn-danger w-100 text-uppercase'>Add Banner</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default AddBanner;