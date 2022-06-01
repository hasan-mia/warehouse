import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../App';

const Blog = () => {
	const {id} = useParams();
	const {blogs} = useContext(productContext);
	// Get Specific Item by ID
 	const blog = blogs.find(item => item._id === id);
	const {title, description, author, img} = blog;
	console.log(blogs);
	return (
		<section className='my-2'>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12 col-12">
						<article>
							<h2 className='text-softwhite'>{title}</h2>
							<p className='text-softwhite fs-6'>Author: {author}</p>
							<div className="img-fluid">
								<img src={img} alt="blog" className='w-100'/>
							</div>
							<p className='text-softwhite text-justify py-2'>{description}</p>
						</article>

					</div>
					{/* Right Sidebar */}
					<div className="col-lg-4 col-md-12 col-12">
						<div className="cat-title">
							<h4>Latest Blogs</h4>
						</div>
						< nav className = 'latest-blog text-softwhite' >
							{
								blogs?.slice(0, 6).map(bloglist=>
									<li key={bloglist._id}>{bloglist.title}</li>
								)
							}
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;