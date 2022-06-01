import { useEffect, useState } from 'react';

const useBlogs = () => {
	const [blogs, setBlogs]= useState();
	useEffect(()=>{
		fetch('https://boiling-basin-90703.herokuapp.com/blogs')
			.then(res => res.json())
			.then(data => setBlogs(data))
	}, []);
	return {blogs, setBlogs};
};

export default useBlogs;