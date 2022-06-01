import React from 'react';
import useCategories from '../../Hooks/useCategories';
import './Categories.css'

const Categories = () => {
	const {categories} = useCategories();
	// categories.map(category => console.log(category.title));
	return (
		<section className='categories my-5'>
			<div className="container">
				<div className="row gx-3">
					{
						categories.map(category=>
							<div key={category._id} className="col-lg-2 col-md-4 col-6">
								<div className="cat-card">
									<img src={category.img} alt="Category Images" />
									<h3>{category.title}</h3>
								</div>
							</div>
							)
					}
					{/* enc col */}
					
				</div>
			</div>
		</section>
	);
};

export default Categories;