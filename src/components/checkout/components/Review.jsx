import * as React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const addresses = ['Calle MUI 1', 'Reactville', 'Cualquier Ciudad', '28001', 'España'];
const payments = [
  { name: 'Tipo de tarjeta:', detail: 'Visa' },
  { name: 'Titular:', detail: 'Sr. Juan Pérez' },
  { name: 'Número de tarjeta:', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Fecha de vencimiento:', detail: '04/2024' },
];

export default function Review({ quantity = 1, unitPrice = 1.00, totalPrice = 1.00 }) {
  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText 
            primary="Precio unitario" 
            secondary="Por hectárea" 
          />
          <Typography variant="body2">${unitPrice.toFixed(2)} USD</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText 
            primary="Cantidad" 
            secondary="Hectáreas seleccionadas" 
          />
          <Typography variant="body2">{quantity}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice.toFixed(2)} USD
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Detalles de envío
          </Typography>
          <Typography gutterBottom>Juan Pérez</Typography>
          <Typography gutterBottom sx={{ color: 'text.secondary' }}>
            {addresses.join(', ')}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Detalles de pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}

Review.propTypes = {
  quantity: PropTypes.number,
  unitPrice: PropTypes.number,
  totalPrice: PropTypes.number,
};
