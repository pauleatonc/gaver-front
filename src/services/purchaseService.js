const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

class PurchaseService {
  async createPurchase(productId) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/purchases/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Aquí puedes agregar headers de autenticación si es necesario
          // 'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          product_id: productId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating purchase:', error);
      throw error;
    }
  }

  async getPurchases() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/purchases/`, {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching purchases:', error);
      throw error;
    }
  }
}

export const purchaseService = new PurchaseService(); 