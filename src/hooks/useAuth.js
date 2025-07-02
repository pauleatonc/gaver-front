import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un token guardado
    const token = localStorage.getItem('authToken');
    if (token) {
      // Aquí podrías validar el token con el backend
      setIsAuthenticated(true);
      setUser({ name: 'Usuario' }); // Esto vendría del backend
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // Aquí harías la llamada al backend para login
      // const response = await authService.login(credentials);
      
      // Simulación de login exitoso
      const mockUser = { name: 'Usuario', email: credentials.email };
      const mockToken = 'mock-jwt-token';
      
      localStorage.setItem('authToken', mockToken);
      setIsAuthenticated(true);
      setUser(mockUser);
      
      return { success: true };
    } catch (error) {
      console.error('Error en login:', error);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };
}; 