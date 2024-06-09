import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/footer';
import infantsBanner from './components/assets/banner_mens.png';
import childrenBanner from './components/assets/banner_women.png';
import accessoriesBanner from './components/assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/infants"
            element={<ShopCategory banner={infantsBanner} category="infants" />}
          />
          <Route
            path="/children"
            element={<ShopCategory banner={childrenBanner} category="children" />}
          />
          <Route
            path="/accessories"
            element={<ShopCategory banner={accessoriesBanner} category="accessories" />}
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
