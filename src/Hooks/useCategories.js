import{ useEffect, useState } from 'react';

const useCategories = () => {
	const [categories, setCategories] = useState([]);
	useEffect(()=>{
		fetch('https://boiling-basin-90703.herokuapp.com/categories')
			.then(res => res.json())
			.then(data => setCategories(data))
	},[])
	return {categories, setCategories};
};

export default useCategories;