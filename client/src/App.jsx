import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ServicesPage from './pages/services';
import TrackOrder from './pages/order-track'
import CompliancePage from './pages/compiliance';
import ContactUs from './pages/contact-us'
import AboutUs from './pages/about-us';
import Products from './pages/products';
import FAQS from './pages/faqs'
import Blog from './pages/blog'
import BLOGDetail from './pages/blog-detail'
// import Home from './pges/home'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ServicesPage />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details/:id" element={<BLOGDetail />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;