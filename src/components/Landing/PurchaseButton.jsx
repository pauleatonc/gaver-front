import React from 'react';
import { usePurchase } from '../../hooks/usePurchase';
import './PurchaseButton.css';

const PurchaseButton = ({ productId, className = '' }) => {
  const { handlePurchase, isProcessing } = usePurchase();

  const handleClick = () => {
    handlePurchase(productId);
  };

  return (
    <button 
      className={`btn btn-success mt-3 ${className}`}
      onClick={handleClick}
      disabled={isProcessing}
    >
      {isProcessing ? 'Procesando...' : 'Comprar'}
    </button>
  );
};

export default PurchaseButton; 