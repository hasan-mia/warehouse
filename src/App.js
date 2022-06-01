import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from './Frontend/Auth/RequireAuth/RequireAuth';
// import Backend from './Backend/Pages/Backend';
import Auth from './Frontend/Auth/Auth';
import Cart from './Frontend/Cart/Cart';
import Footer from './Frontend/Footer/Footer';
import Header from './Frontend/Header/Header';
import Checkout from './Frontend/Order/Checkout';
import Order from './Frontend/Order/Order';
import Home from './Frontend/Pages/Home';
import Product from './Frontend/Products/Product';
import useProducts from './Hooks/useProducts';
import Wishlist from './Frontend/Cart/Wishlist';
import NotFound from './Frontend/NotFound/NotFound';
import Blogs from './Frontend/Blogs/Blogs';
import About from './Frontend/Pages/About';
import Contact from './Frontend/Pages/Contact';
import Blog from './Frontend/Blogs/Blog';
import AddProduct from './Backend/Products/AddProduct/AddProduct';
import UpdateProduct from './Backend/Products/UpdateProduct/UpdateProduct';
import AllProduct from './Backend/Products/AllProduct/AllProduct';
import AddMyProduct from './Backend/Myproducts/AddMyProduct/AddMyProduct';
import UpdateMyProduct from './Backend/Myproducts/UpdateMyProduct/UpdateMyProduct';
import AllMyProduct from './Backend/Myproducts/AllMyProduct/AllMyProduct';
import { ToastContainer } from 'react-toastify';
import AddBlog from './Backend/Blogs/AddBlog/AddBlog';
import UpdateBlog from './Backend/Blogs/UpdateBlog/UpdateBlog';
import AllBlog from './Backend/Blogs/AllBlog/AllBlog';
import useBlogs from './Hooks/useBlogs';
import ResetPassword from './Frontend/Auth/ResetPassword';
import ClipLoader from "react-spinners/ClipLoader";
import AllCategory from './Backend/Categories/AllCategory/AllCategory';
import AddCategory from './Backend/Categories/AddCategory/AddCategory';
import UpdateCategory from './Backend/Categories/UpdateCategory/UpdateCategory';
import useCategories from './Hooks/useCategories';
import AllBanner from './Backend/Banners/AllBanner/AllBanner';
import AddBanner from './Backend/Banners/AddBanner/AddBanner';
import UpdateBanner from './Backend/Banners/UpdateBanner/UpdateBanner';
import useBanners from './Hooks/useBanners';

// Product & Blog Context 
export const productContext = createContext()

function App() {
  const {products, setProducts, isReload, setIsReload} = useProducts();
  const {blogs, setBlogs} = useBlogs();
  const {categories, setCategories} = useCategories();
  const {banners, setBanners} = useBanners();

  {/*======== Spnner Condition=======*/}
  const [loading, setLoading] = useState(false);
  const [color] = useState("#ffffff");
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false)
    }, 3000)
  }, [])

  return (
    <productContext.Provider value={{products, setProducts, isReload, setIsReload, blogs, setBlogs, categories, setCategories, banners, setBanners}}>
      <Header></Header>

      {/* Spinner Container */}
      {
        loading ?
         <div className='d-flex justify-content-center'>
			    <ClipLoader color={color} loading={loading} size={150} /> 
	    	</div>
      :
      <>
       {/* ================== Frontend Routes ======================*/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/inventory/:id' element={
          <RequireAuth>
              <Product/>
          </RequireAuth>
        }/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/>

         {/*====================== Backend Routes ===================*/}
        <Route path="/manageProducts" element={
          <RequireAuth>
            <AllProduct/>
          </RequireAuth>
          }/>
        
        {/*======== Product Route=======*/}

        <Route path="/addProduct" element={
          <RequireAuth>
            <AddProduct/>
          </RequireAuth>
        }/>

        <Route path="/updateProduct/:id" element={
          <RequireAuth>
            <UpdateProduct/>
          </RequireAuth>
        }/>

        {/*======== My Product Route=======*/}
        <Route path="/myProducts" element={
          <RequireAuth>
            <AllMyProduct/>
          </RequireAuth>
        }/>

        <Route path="/addMyProduct" element={
          <RequireAuth>
            <AddMyProduct/>
          </RequireAuth>
        }/>

        <Route path="/updateMyProduct/:id" element={
          <RequireAuth>
            <UpdateMyProduct/>
          </RequireAuth>
        }/>

      {/* ======Blog Route=======*/}

        <Route path="/allBlog" element={
          <RequireAuth>
            <AllBlog/>
          </RequireAuth>
        }/>

        <Route path="/addBlog" element={
          <RequireAuth>
            <AddBlog/>
          </RequireAuth>
        }/>

        <Route path="/updateBlog/:id" element={
          <RequireAuth>
            <UpdateBlog/>
          </RequireAuth>
        }/>

        {/*======== Category Route=======*/}
        <Route path="/allCategory" element={
          <RequireAuth>
            <AllCategory/>
          </RequireAuth>
        }/>

        <Route path="/addCategory" element={
          <RequireAuth>
            <AddCategory/>
          </RequireAuth>
        }/>

        <Route path="/updateCategory/:id" element={
          <RequireAuth>
            <UpdateCategory/>
          </RequireAuth>
        }/>

        {/*======== Banner Route=======*/}
        <Route path="/allBanner" element={
          <RequireAuth>
            <AllBanner/>
          </RequireAuth>
        }/>

        <Route path="/addBanner" element={
          <RequireAuth>
            <AddBanner/>
          </RequireAuth>
        }/>

        <Route path="/updateBanner/:id" element={
          <RequireAuth>
            <UpdateBanner/>
          </RequireAuth>
        }/>

        {/*======== Error Route=======*/}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </>
      }

      <Footer></Footer>

      {/* Toast Container */}
      <ToastContainer/>

    </productContext.Provider>
   
  );
}

export default App;
