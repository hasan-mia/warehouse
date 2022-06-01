import { useEffect, useState } from "react";

const useProductDetails = id => {
	const [product, setProduct] = useState({});
    useEffect( () =>{
        const url = `https://boiling-basin-90703.herokuapp.com/product/${id}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [id]);
	return [product, setProduct];
};

export default useProductDetails;