import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/footer';
import menBanner from './components/assets/banner_mens.png';
import womenBanner from './components/assets/banner_women.png';
import kidsBanner from './components/assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/infants"
            element={<ShopCategory banner={menBanner} category="men" />}
          />
          <Route
            path="/children"
            element={<ShopCategory banner={womenBanner} category="children" />}
          />
          <Route
            path="/accessories"
            element={<ShopCategory banner={kidsBanner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
