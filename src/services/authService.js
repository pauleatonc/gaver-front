const API_URL = 'http://localhost:8000/api/users/';

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};

export const register = async (data) => {
  const response = await fetch(`${API_URL}register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getProfile = async (token) => {
  const response = await fetch(`${API_URL}profile/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    },
    credentials: 'include',
  });
  return response.json();
};

export const logout = async (token) => {
  const response = await fetch(`${API_URL}logout/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    },
    credentials: 'include',
  });
  return response.json();
}; 