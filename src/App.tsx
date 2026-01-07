import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Toaster position="top-right" richColors closeButton />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />

        {/* Protected routes - add your dashboard routes here */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold text-primary-500">Dashboard - Coming Soon</h1>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
