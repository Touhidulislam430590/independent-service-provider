import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/Authentications/Login/Login';
import Register from './components/Authentications/Register/Register';
import Blogs from './components/Blogs/Blogs';
import CheckOut from './components/Checkout/CheckOut';
import Home from './components/Home/Home';
import RequireAuth from './components/Home/Service/RequreAuth/RequireAuth';
import Service from './components/Home/Service/Service';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/service' element={<Service></Service>}></Route> */}
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/signin' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
