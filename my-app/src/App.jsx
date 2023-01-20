import './App.css';
import Navbar from "./Component/Navbar";
import AllRoute from "./Component/AllRoute";
import { Footer } from './Footer/Footer';
function App() 
{
  return (

    <div className="App">
    <Navbar/>
<AllRoute/>
<Footer/>
    </div>
  );
}

export default App;
