import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import OrderInfo from './components/order-info/OrderInfo';
import ProductTable from './components/product-table/ProductTable';
import News from './components/news/News';
import Footer from './components/footer/Footer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ProductTable/>
      <OrderInfo/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
