import {
  Navigate,
  Route,
  Routes,
} from 'react-router';

import Layout from './components/Layout/Layout';

// Main Website Pages
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/Contact/ContactUs';
import Blogs from './pages/Blogs/Blogs';

// Admin Pages
import AdminLogin from './pages/Admin/Login/AdminLogin';
import AdminLayout from './pages/Admin/Components/AdminLayout';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';

// ========================================
// MAIN APPLICATION
// ========================================

function App() {
  return (
    <Routes>

      {/* ==================================
          MAIN WEBSITE
      ================================== */}

      <Route element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="services/*" element={<Services />} />

        <Route path="blogs/*" element={<Blogs />} />

        <Route path="about-us/*" element={<AboutUs />} />

        <Route path="contact-us/*" element={<ContactUs />} />

      </Route>

      {/* ==================================
          ADMIN PANEL
      ================================== */}

      {/* Admin Login */}
      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* Admin Dashboard Layout */}
      <Route
        path="/admin"
        element={<AdminLayout />}
      >
        <Route
          index
          element={<Navigate to="/admin/dashboard" replace />}
        />

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />
      </Route>

      {/* ==================================
          OLD URL REDIRECTS
      ================================== */}

      <Route
        path="/home"
        element={<Navigate to="/" replace />}
      />

      <Route
        path="/socialmbt/homepage.html"
        element={<Navigate to="/" replace />}
      />

      <Route
        path="/socialmbt/pages/services.html"
        element={<Navigate to="/services" replace />}
      />

      <Route
        path="/socialmbt/pages/blogs.html"
        element={<Navigate to="/blogs" replace />}
      />

      <Route
        path="/socialmbt/pages/about-us.html"
        element={<Navigate to="/about-us" replace />}
      />

      <Route
        path="/socialmbt/pages/contact-us.html"
        element={<Navigate to="/contact-us" replace />}
      />

      {/* ==================================
          FALLBACK
      ================================== */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default App;