import { useState } from 'react';
import { purchaseService } from '../services/purchaseService';

export const usePurchase = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePurchase = async (productId) => {
    try {
      setIsProcessing(true);
      const result = await purchaseService.createPurchase(productId);
      
      // Aquí puedes agregar lógica adicional como redirección o notificación
      console.log('Compra exitosa:', result);
      
      return result;
    } catch (error) {
      console.error('Error en la compra:', error);
      // Aquí puedes agregar manejo de errores como mostrar notificaciones
      throw error;
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    handlePurchase,
    isProcessing
  };
}; 