import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import ProtectedRoute from './contexts/ProtectedRoute';
import TrainerPage from './components/Trainers';
import AdminPanel from './components/Dashboard/Dashboard';
import RegisterModal from './components/Authorized/RegisterModal';
import LoginModal from './components/Authorized/LoginModal';
import ManageTrainers from './components/Dashboard/ManageTrainers';
import ScheduleManagement from './components/Dashboard/ScheduleManagement';
import ViewApplications from './components/Dashboard/ViewApplications';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthProvider>
      <Router>
        <AppContent
          openLoginModal={openLoginModal}
          openRegisterModal={openRegisterModal}
          closeLoginModal={closeLoginModal}
          closeRegisterModal={closeRegisterModal}
          isRegisterModalOpen={isRegisterModalOpen}
          isLoginModalOpen={isLoginModalOpen}
        />
      </Router>
    </AuthProvider>
  );
}

function AppContent({ openLoginModal, openRegisterModal, closeLoginModal, closeRegisterModal, isRegisterModalOpen, isLoginModalOpen }) {
  const { user, login, logout } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSuccess = async (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const user = { token, role: decodedToken.role };
      login(user);

      if (user.role === 'user') {
        navigate('/');
      } else if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'trainer') {
        navigate('/trainer');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onLoginClick={openLoginModal}
        onRegisterClick={openRegisterModal}
        isAuthenticated={!!user}
        onLogout={logout}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trainers" element={<TrainerPage />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <Routes>
                  <Route path="/" element={<ManageTrainers />} />
                  <Route path="trainers" element={<ManageTrainers />} />
                  <Route path="schedule" element={<ScheduleManagement />} />
                  <Route path="applications" element={<ViewApplications />} />
                </Routes>
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainer"
            element={
              <ProtectedRoute allowedRoles={['trainer']}>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={closeRegisterModal} />
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default App;
