import{ useEffect, useState } from 'react';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [isReload, setIsReload] = useState(false);
	useEffect(() => {
		fetch('https://boiling-basin-90703.herokuapp.com/products')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [isReload])
	return {products, setProducts, isReload, setIsReload};
};

export default useProducts;