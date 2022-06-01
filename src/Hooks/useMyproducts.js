import React, { useEffect, useState } from 'react';

const useMyproducts = () => {
	const [myproducts, setMyproducts] = useState([]);
	const [isReload, setIsReload] = useState(false);
	useEffect(() => {
		fetch('https://boiling-basin-90703.herokuapp.com/myproducts')
			.then(res => res.json())
			.then(data => setMyproducts(data))
	}, [isReload])
	return {myproducts, setMyproducts};
};

export default useMyproducts;