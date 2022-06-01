import{ useEffect, useState } from 'react';

const useBanners = () => {
	const [banners, setBanners] = useState([]);
	// Fetch Data
	useEffect(() => {
		fetch('https://boiling-basin-90703.herokuapp.com/banners')
			.then(res => res.json())
			.then(data => setBanners(data))
	}, [])
	return {banners, setBanners}
};

export default useBanners;