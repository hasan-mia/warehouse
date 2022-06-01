import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts';
import './Backend.css';
const Backend = () => {
	const {products, setProducts} = useProducts();
	const updateProduct = useNavigate();

	// Delete Product
	const handleProductDelete = id =>{
        const confirm = window.confirm('Are you sure you want to delete?');

        if(confirm){
            const url = `https://boiling-basin-90703.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
				toast.success("Product Deleted Successfully");
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
							<th>Product Name</th>
							<th>Price</th>
							<th>Supplier</th>
							<th>Edit</th>
							<th>Delete </th>
						</thead>
						<tbody>
							{
								products?.reverse().map(product =>
									<tr key={product._id} className="align-middle alert border-bottom">
								<td>
									<i className="far fa-hashtag"></i>
								</td>
								<td className="text-center">
									<img className="pic" src={product.img} alt="my product images"/>
								</td>
								<td>
									<div>
										<p className="m-0 fw-bold">{product.title}</p>
										<p className="m-0 text-muted">{product.description?.slice(0, 50)}</p>
									</div>
								</td>
								<td>
									<div className="fw-600">{product.price}</div>
								</td>
								<td className="d-">
									<p className="m-0 fw-bold">{product.supplier}</p>
								</td>
								<td>
									<div className="btn">
										<button onClick={()=>updateProduct(`/updateProduct/${product._id}`)} className="btn bg-darkblue w-100"><i className="far fa-edit"></i></button> 
										{/* <Link to={`updateProduct/${product._id}`}><span className="fas fa-pencil"> </span></Link> */}
									</div>
								</td>
								<td>
									<div className="btn">
										<button onClick={()=>handleProductDelete(product._id)} className="btn bg-danger w-100"> <span className="fas fa-trash-alt"></span></button> 
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

export default Backend;