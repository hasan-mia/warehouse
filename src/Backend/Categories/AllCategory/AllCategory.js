import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCategories from '../../../Hooks/useCategories';
const AllCategory = () => {
	const {categories, setCategories} = useCategories();
	const updateCategory = useNavigate();

	// Delete Product
	const handleBlogCategory = id =>{
        const confirm = window.confirm('Are you sure you want to delete?');

        if(confirm){
            const url = `https://boiling-basin-90703.herokuapp.com/category/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = categories.filter(category => category._id !== id);
                    setCategories(remaining);
                }
				toast.success("Category Deleted Successfully");
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
							<th>Category Name</th>
							<th>Edit</th>
							<th>Delete </th>
						</thead>
						<tbody>
							{
								categories?.reverse().map(category =>
									<tr key={category._id} className="align-middle alert border-bottom">
								<td>
									<i className="far fa-hashtag"></i>
								</td>
								<td className="text-center">
									<img className="pic" src={category.img} alt="my product images"/>
								</td>
								<td>
									<div>
										<p className="m-0 fw-bold">{category.title}</p>
										<p className="m-0 text-muted">{category.description?.slice(0, 50)}</p>
									</div>
								</td>
								<td>
									<div className="btn">
										<button onClick={()=>updateCategory(`/updateCategory/${category._id}`)} className="btn bg-darkblue w-100"><i className="far fa-edit"></i></button> 
									</div>
								</td>
								<td>
									<div className="btn">
										<button onClick={()=>handleBlogCategory(category._id)} className="btn bg-danger w-100"> <span className="fas fa-trash-alt"></span></button> 
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

export default AllCategory;