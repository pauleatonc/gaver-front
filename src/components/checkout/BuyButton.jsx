import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function BuyButton({ 
  variant = 'contained', 
  size = 'medium', 
  fullWidth = false,
  children = 'Comprar ahora',
  sx = {},
  ...props 
}) {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate('/checkout');
  };

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      startIcon={<ShoppingCartIcon />}
      onClick={handleBuyClick}
      sx={{
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: 2,
        px: 3,
        py: 1.5,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
} 