import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBlogs from '../../Hooks/useBlogs';
import './Blogs.css';
const Blogs = () => {
	const {blogs}=useBlogs();
	const blogDetails = useNavigate();
	return (
		<section className='py-2'>
			<div className="container">
				<div className="row">
					{
						blogs?.map(blog=>
						<div key={blog._id} className="col-lg-3 col-md-6 col-12">
							<div class="blog-card">
								<img src={blog?.img} class="card-img-top" alt="blog"/>
								<div class="card-body">
									<h5 class="card-title">{blog?.title}</h5>
									<p className='my-1'>Author: {blog?.author}</p>
									<p class="card-text text-justify">{blog?.description.slice(0, 200)}</p>
								</div>
								<button onClick={()=>blogDetails(`/blog/${blog._id}`)} className="btn btn-primary w-100">More..</button> 
							</div>
						</div>
						)
					}
				</div>
			</div>
		</section>
	);
};

export default Blogs;