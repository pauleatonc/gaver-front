import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import LandingPage from './pages/LandingPage';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Checkout from './components/checkout/Checkout';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <AuthProvider>
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Aquí puedes agregar más rutas en el futuro */}
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </CssVarsProvider>
  );
}

export default App;
