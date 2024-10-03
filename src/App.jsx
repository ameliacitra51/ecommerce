import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import New from './components/New/New'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'
import Login from './components/User/Login'
import Register from './components/User/Register';
import SignIn from './admin/SignIn';
import Product from './components/Product/Product';
import Detail from './components/Product/Detail';
import Recap from './admin/Recap/Recap.jsx'
import Latest from './admin/Recap/Latest.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'
import AllTimes from './admin/Recap/AllTimes.jsx';
import LineChart from './admin/Recap/LineChart.jsx';
import ProductAdm from './admin/Product/Product.jsx';
import Create from './admin/Product/Create.jsx';
import Orders from './admin/Orders/Orders.jsx';
import View from './admin/Orders/View.jsx';
import Users from './admin/Users/Users.jsx';

const App = () => {
  React.useEffect(() =>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={
            <>
            <New />
            <Review />
            <Footer />
            <Detail />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/product' element={<Product />}/>
          <Route path='/detail' element={<Detail />}/>
          <Route path='/recap' element={<Recap />}/>
          <Route path='/latest' element={<Latest />}/>
          <Route path='/alltimes' element={<AllTimes />}/>
          <Route path='/linechart' element={<LineChart />}/>
          <Route path='/productadm' element={<ProductAdm />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/view' element={<View />}/>
          <Route path='/users' element={<Users />}/>
        </Routes>
      </Router>
  )
}

export default App
