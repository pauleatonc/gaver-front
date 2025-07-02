import { useState, useEffect } from 'react';
import * as authService from '../services/authService';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar usuario y token al iniciar
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('authUser');
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(email, password);
      if (response.success && response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('authUser', JSON.stringify(response.user));
        setIsAuthenticated(true);
        setUser(response.user);
        setLoading(false);
        return { success: true };
      } else {
        setError(response.message || 'Error en login');
        setLoading(false);
        return { success: false, error: response.message };
      }
    } catch {
      setError('Error de red');
      setLoading(false);
      return { success: false, error: 'Error de red' };
    }
  };

  const register = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.register(data);
      if (response.success && response.token) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('authUser', JSON.stringify(response.user));
        setIsAuthenticated(true);
        setUser(response.user);
        setLoading(false);
        return { success: true };
      } else {
        setError(response.message || 'Error en registro');
        setLoading(false);
        return { success: false, error: response.errors || response.message };
      }
    } catch {
      setError('Error de red');
      setLoading(false);
      return { success: false, error: 'Error de red' };
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('authToken');
    try {
      await authService.logout(token);
    } catch {
      // Ignorar error de red en logout
    }
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setIsAuthenticated(false);
    setUser(null);
    setLoading(false);
  };

  const getProfile = async () => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('authToken');
    try {
      const response = await authService.getProfile(token);
      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem('authUser', JSON.stringify(response.user));
        setLoading(false);
        return response.user;
      } else {
        setError(response.message || 'No autenticado');
        setLoading(false);
        return null;
      }
    } catch {
      setError('Error de red');
      setLoading(false);
      return null;
    }
  };

  return {
    isAuthenticated,
    user,
    loading,
    error,
    login,
    register,
    logout,
    getProfile,
  };
}; 