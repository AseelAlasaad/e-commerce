import './App.css';
import Home from "./pages/Home";
import Product from './components/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

import {

  Routes,
  Route
} from "react-router";
function App() {

  const user= true; 

  return (
    <div>
    <Home/>
   

    <Routes>

      {/* <Route path="/" element={<Home/>}/> */}
       
      <Route path="/Login" element={<Login/>}/>


      <Route path="/register" element={<Register/>}/>


    </Routes>
    </div>
  );
}

export default App;
