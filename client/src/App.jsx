import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ServicesPage from './pages/services';
import TrackOrder from './pages/order-track'
import CompliancePage from './pages/compiliance';
import ContactUs from './pages/contact-us'
import AboutUs from './pages/about-us';
// import Home from './pages/home'

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;