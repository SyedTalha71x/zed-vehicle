import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ServicesPage from "./pages/services";
import TrackOrder from "./pages/order-track";
import CompliancePage from "./pages/compiliance";
import ContactUs from "./pages/contact-us";
import AboutUs from "./pages/about-us";
import Products from "./pages/products";
import FAQS from "./pages/faqs";
import Blog from "./pages/blog";
import BLOGDetail from "./pages/blog-detail";
import Home from "./pages/home";
import HowItWorks from "./pages/how-it-works";

import DashboardLayout from "./layout/dashboard-layout";
import VehicleDetail from "./dashboard/vehicle-detail";
import Signup from "./dashboard/pages/signup";
import AppLayout from "./layout/app-layout";
import Signin from "./dashboard/pages/signin";
import Otp from "./dashboard/pages/otp";
import Dashboard from "./dashboard/pages/dashboard";
import Customers from "./dashboard/pages/customers";
import OrdersTracking from "./dashboard/pages/orders-tracking";
import Blogs from "./dashboard/pages/blogs";
import Reviews from "./dashboard/pages/reviews";
import Staff from "./dashboard/pages/staff";
import WebsiteContent from "./dashboard/pages/website-content";
import AddStaff from "./dashboard/pages/add-staff";

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

function AppRoutes() {
    // const location = useLocation();
    // const isRouteCheck = location.pathname.startsWith("/dashboard");

    return (
        <>
            {/* {!isRouteCheck && <Navbar />} */}

            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/" index element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/track-order" element={<TrackOrder />} />
                    <Route path="/compliance" element={<CompliancePage />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/faqs" element={<FAQS />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-details/:id" element={<BLOGDetail />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                </Route>


                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<Navigate to={'/'} />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/confirm-otp" element={<Otp />} />

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route path="home" element={<Dashboard />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="staff/add" element={<AddStaff />} />
                    <Route
                        path="website-content"
                        element={<WebsiteContent />}
                    />
                    <Route path="staff" element={<Staff />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route
                        path="orders-tracking"
                        element={<OrdersTracking />}
                    />
                    <Route path="vehicle-detail" element={<VehicleDetail />} />
                </Route>
            </Routes>

            {/* {!isRouteCheck && <Footer />} */}
        </>
    );
}

export default App;
