import {Routes,Route,} from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import Cart from '../pages/Cart';
import Language from '../pages/Language';
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

function AllRoute  () 
{

  return (
    <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/signin"  element={<SignIn/>}/>
    <Route path="/Contact"  element={<ContactUs/>}/>
    <Route path="/Language"  element={<Language/>}/>
    <Route path="/Cart"  element={<Cart/>}/>
  </Routes>
  );
}


export default AllRoute;