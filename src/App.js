import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import OrderInfo from './components/order-info/OrderInfo';
import ProductTable from './components/product-table/ProductTable';
import News from './components/news/News';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ProductTable/>
      <OrderInfo/>
      <News/>
    </div>
  );
}

export default App;
