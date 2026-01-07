import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './common/Header';
import Footer from './common/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import KitchenStoragePage from './pages/KitchenStoragePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      <Header />
      <Routes>
        {/* All routes are now public - authentication is available but not required */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/kitchen-storage" element={<KitchenStoragePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />

        {/* Dashboard - now accessible without login */}
        <Route
          path="/dashboard"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-primary-500 mb-4">Dashboard</h1>
                <p className="text-neutral-600">Welcome! Add your dashboard content here.</p>
              </div>
            </div>
          }
        />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
