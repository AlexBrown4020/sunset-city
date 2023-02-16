import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import OrderInfo from './components/order-info/OrderInfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <OrderInfo/>
    </div>
  );
}

export default App;
