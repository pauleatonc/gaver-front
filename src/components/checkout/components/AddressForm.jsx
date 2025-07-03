import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
  marginRight: '16px',
}));

export default function AddressForm() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="first-name" required>
            Nombre
          </FormLabel>
          <OutlinedInput
            id="first-name"
            name="first-name"
            type="name"
            placeholder="Juan"
            autoComplete="first name"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="last-name" required>
            Apellido
          </FormLabel>
          <OutlinedInput
            id="last-name"
            name="last-name"
            type="last-name"
            placeholder="Pérez"
            autoComplete="last name"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12}>
        <FormGrid>
          <FormLabel htmlFor="address1" required>
            Dirección línea 1
          </FormLabel>
          <OutlinedInput
            id="address1"
            name="address1"
            type="address1"
            placeholder="Nombre de la calle y número"
            autoComplete="shipping address-line1"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12}>
        <FormGrid>
          <FormLabel htmlFor="address2">Dirección línea 2</FormLabel>
          <OutlinedInput
            id="address2"
            name="address2"
            type="address2"
            placeholder="Apartamento, suite, unidad, etc. (opcional)"
            autoComplete="shipping address-line2"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="country" required>
            País
          </FormLabel>
          <OutlinedInput
            id="country"
            name="country"
            type="country"
            placeholder="España"
            autoComplete="shipping country"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="state" required>
            Región/Provincia
          </FormLabel>
          <OutlinedInput
            id="state"
            name="state"
            type="state"
            placeholder="Madrid"
            autoComplete="State"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="city" required>
            Ciudad
          </FormLabel>
          <OutlinedInput
            id="city"
            name="city"
            type="city"
            placeholder="Madrid"
            autoComplete="City"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="zip" required>
            Código postal
          </FormLabel>
          <OutlinedInput
            id="zip"
            name="zip"
            type="zip"
            placeholder="28001"
            autoComplete="shipping postal-code"
            required
            size="small"
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12}>
        <FormGrid>
          <FormControlLabel
            control={<Checkbox name="saveAddress" value="yes" />}
            label="Usar esta dirección para los detalles de pago"
          />
        </FormGrid>
      </Grid>
    </Grid>
  );
}
