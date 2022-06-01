import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useBlogs from '../../../Hooks/useBlogs';
const AllBlog = () => {
	const {blogs, setBlogs}=useBlogs();
	const updateBlog = useNavigate();

	// Delete Product
	const handleBlogDelete = id =>{
        const confirm = window.confirm('Are you sure you want to delete?');

        if(confirm){
            const url = `https://boiling-basin-90703.herokuapp.com/blog/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = blogs.filter(blog => blog._id !== id);
                    setBlogs(remaining);
                }
				toast.success("Blog Deleted Successfully");
            })
        }
    }

	return (
		<section>
			<div className="container">
				<div className="table-wrap">
					<table className="table table-responsive table-borderless">
						<thead>
							<th>No.</th>
							<th>Image</th>
							<th>Blog Title</th>
							<th>Author</th>
							<th>Edit</th>
							<th>Delete </th>
						</thead>
						<tbody>
							{
								blogs?.reverse().map(blog =>
									<tr key={blog._id} className="align-middle alert border-bottom">
								<td>
									<i className="far fa-hashtag"></i>
								</td>
								<td className="text-center">
									<img className="pic" src={blog.img} alt="my product images"/>
								</td>
								<td>
									<div>
										<p className="m-0 fw-bold">{blog.title}</p>
										<p className="m-0 text-muted">{blog.description?.slice(0, 50)}</p>
									</div>
								</td>
								<td>
									<div className="fw-600">{blog.author}</div>
								</td>
								<td>
									<div className="btn">
										<button onClick={()=>updateBlog(`/updateBlog/${blog._id}`)} className="btn bg-darkblue w-100"><i className="far fa-edit"></i></button> 
										{/* <Link to={`updateProduct/${product._id}`}><span className="fas fa-pencil"> </span></Link> */}
									</div>
								</td>
								<td>
									<div className="btn">
										<button onClick={()=>handleBlogDelete(blog._id)} className="btn bg-danger w-100"> <span className="fas fa-trash-alt"></span></button> 
									</div>
								</td>
							</tr>
							)
							}

						</tbody>
					</table>
				</div>
				
    		</div>
		</section>
	);
};

export default AllBlog;