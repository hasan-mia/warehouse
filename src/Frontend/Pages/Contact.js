import React from 'react';
import './Contact.css';
const Contact = () => {
	return (
		<section className='my-2'>
			<div class="container">
				<div class="callback d-flex flex-column align-items-center justify-content-center">
					<div class="heading d-flex flex-column align-items-center justify-content-center">
						<span class="fas fa-headphones"></span>
						<p class="h-1">Get a Call Back</p>
						<p class="p-1">Leave your phone number.we will call back</p>
					</div>
					<div class="d-md-flex flex-colums">
						<div class="row gx-2">
							<div class="col-md-5 col-12 me-md-4">
								<input class="form-control" type="text" placeholder="Your Name"/>
							</div>
							<div class="col-md-5 col-12 ms-md-1">
								<input class="form-control" type="text" placeholder="Phone No"/>
							</div>
						</div>
						<div class="btn btn-primary">Submit</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;