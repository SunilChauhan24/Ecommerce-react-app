import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Slidder from './components/Slidder.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './components/CartContext.jsx';





function App() {
  return (
    <div>
      <CartProvider>
      <Navbar />
      <Slidder />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
