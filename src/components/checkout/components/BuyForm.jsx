import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const SectionCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  border: '1px solid',
  borderColor: theme.palette.divider,
  boxShadow: theme.shadows[1],
}));

export default function BuyForm({ onTotalPriceChange }) {
  const [quantity, setQuantity] = React.useState(1);
  const [recipientName, setRecipientName] = React.useState('');
  const [recipientLastName, setRecipientLastName] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [senderName, setSenderName] = React.useState('');
  const [senderLastName, setSenderLastName] = React.useState('');

  const unitPrice = 1; // USD

  // Calculate total price and notify parent component
  React.useEffect(() => {
    const totalPrice = quantity * unitPrice;
    if (onTotalPriceChange) {
      onTotalPriceChange(totalPrice);
    }
  }, [quantity, unitPrice, onTotalPriceChange]);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= 140) {
      setMessage(value);
    }
  };

  const handleAnonymousChange = (event) => {
    setIsAnonymous(event.target.checked);
    if (event.target.checked) {
      setSenderName('');
      setSenderLastName('');
    }
  };

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 800, 
      mx: 'auto',
      py: 2,
      px: { xs: 2, sm: 3 }
    }}>   
             {/* Sección de Cantidad y Precio */}
       <SectionCard>
         <CardContent>
           <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} md={6}>
              <FormGrid>
                <FormLabel htmlFor="quantity" required>
                  Cantidad
                </FormLabel>
                <OutlinedInput
                  id="quantity"
                  name="quantity"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  startAdornment={<InputAdornment position="start">Hectáreas</InputAdornment>}
                  required
                  size="small"
                  inputProps={{ min: 1 }}
                />
              </FormGrid>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormGrid>
                <FormLabel>Precio Unitario</FormLabel>
                <OutlinedInput
                  value={`$${unitPrice.toFixed(2)} USD`}
                  readOnly
                  startAdornment={<InputAdornment position="start">Precio</InputAdornment>}
                  size="small"
                />
              </FormGrid>
            </Grid>            
          </Grid>
        </CardContent>
      </SectionCard>

             {/* Sección ¿A quién va dirigido? */}
       <SectionCard>
         <CardContent>
           <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
             ¿A quién va dirigido?
           </Typography>
           <Grid container spacing={3} alignItems="flex-end" sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <FormGrid>
                <FormLabel htmlFor="recipient-name" required>
                  Nombre
                </FormLabel>
                <OutlinedInput
                  id="recipient-name"
                  name="recipient-name"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="Nombre del destinatario"
                  required
                  size="small"
                />
              </FormGrid>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormGrid>
                <FormLabel htmlFor="recipient-lastname" required>
                  Apellido
                </FormLabel>
                <OutlinedInput
                  id="recipient-lastname"
                  name="recipient-lastname"
                  value={recipientLastName}
                  onChange={(e) => setRecipientLastName(e.target.value)}
                  placeholder="Apellido del destinatario"
                  required
                  size="small"
                />
              </FormGrid>
            </Grid>
          </Grid>
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormGrid>
                <FormLabel htmlFor="message">
                  Escribe un mensaje personalizado (opcional)
                </FormLabel>
                <TextField
                  id="message"
                  name="message"
                  multiline
                  rows={6}
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Escribe tu mensaje aquí..."
                  fullWidth
                  inputProps={{ maxLength: 140 }}
                  helperText={`${message.length}/140 caracteres`}
                  variant="outlined"
                  InputProps={{
                    sx: {
                      minHeight: '150px', // Altura mínima garantizada
                    },
                  }}
                />
              </FormGrid>
            </Grid>
          </Grid>
        </CardContent>
      </SectionCard>

      {/* Sección Remitente */}
       <SectionCard>
         <CardContent>
           <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
             Remitente
           </Typography>
           
           {/* Checkbox centrado */}
           <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
             <FormControlLabel
               control={
                 <Checkbox 
                   checked={isAnonymous}
                   onChange={handleAnonymousChange}
                   name="anonymous"
                 />
               }
               label="Envío anónimo"
             />
           </Box>
           
           {/* Campos de nombre y apellido */}
           {!isAnonymous && (
             <Grid container spacing={3} alignItems="flex-end">
               <Grid item xs={12} md={6}>
                 <FormGrid>
                   <FormLabel htmlFor="sender-name" required>
                     Nombre
                   </FormLabel>
                   <OutlinedInput
                     id="sender-name"
                     name="sender-name"
                     value={senderName}
                     onChange={(e) => setSenderName(e.target.value)}
                     placeholder="Tu nombre"
                     required
                     size="small"
                   />
                 </FormGrid>
               </Grid>
               <Grid item xs={12} md={6}>
                 <FormGrid>
                   <FormLabel htmlFor="sender-lastname" required>
                     Apellido
                   </FormLabel>
                   <OutlinedInput
                     id="sender-lastname"
                     name="sender-lastname"
                     value={senderLastName}
                     onChange={(e) => setSenderLastName(e.target.value)}
                     placeholder="Tu apellido"
                     required
                     size="small"
                   />
                 </FormGrid>
               </Grid>
             </Grid>
           )}
        </CardContent>
      </SectionCard>
    </Box>
  );
}

BuyForm.propTypes = {
  onTotalPriceChange: PropTypes.func,
};
