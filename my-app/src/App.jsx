import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Cart from './pages/Cart';
import Language from './pages/Language';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
function App() 
{
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="contact">Contact Us</Link>
        <Link to="/language">IN/EN</Link>
        <Link to="cart">Cart</Link>
      </div>
      <Routes>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/signin"  element={<SignIn/>}/>
        <Route path="/contact"  element={<ContactUs/>}/>
        <Route path="/language"  element={<Language/>}/>
        <Route path="/cart"  element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
