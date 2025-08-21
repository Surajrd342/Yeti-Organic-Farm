import CartSystem from "./component/CartItem/CartSystem";
import Footer from "./component/Footer/Footer";
import Home from "./Pages/Home";
import Navbar from "./component/HeaderNavigation/Navigation";
import ProductList from "./Pages/ProductList";
import ShoppingCart from "./Pages/ShoppingCart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import SingleProduct from "./Pages/SingleProduct";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';


function App() {

  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/allproducts" element={<ProductList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}



export default App;
