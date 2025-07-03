import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useGeographicData } from '../../../hooks/useGeographicData';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
  marginRight: '16px',
}));

export default function AddressForm() {
  const {
    countries,
    states,
    cities,
    selectedCountry,
    selectedState,
    selectedCity,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    isStateDisabled,
    isCityDisabled,
  } = useGeographicData();

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
          <Autocomplete
            id="country"
            options={countries}
            getOptionLabel={(option) => option.label}
            value={selectedCountry}
            onChange={(event, newValue) => handleCountryChange(newValue)}
            size="small"
            sx={{
              '& .MuiAutocomplete-popupIndicator': {
                padding: '4px',
                height: '100%',
                '& .MuiSvgIcon-root': {
                  fontSize: '1rem',
                },
              },
              '& .MuiAutocomplete-endAdornment': {
                right: '6px',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Selecciona un país"
                size="small"
                required
              />
            )}
            noOptionsText="No hay países disponibles"
            loadingText="Cargando países..."
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="state" required>
            Región/Provincia
          </FormLabel>
          <Autocomplete
            id="state"
            options={states}
            getOptionLabel={(option) => option.label}
            value={selectedState}
            onChange={(event, newValue) => handleStateChange(newValue)}
            disabled={isStateDisabled}
            size="small"
            sx={{
              '& .MuiAutocomplete-popupIndicator': {
                padding: '4px',
                height: '100%',
                '& .MuiSvgIcon-root': {
                  fontSize: '1rem',
                },
              },
              '& .MuiAutocomplete-endAdornment': {
                right: '6px',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={isStateDisabled ? "Primero selecciona un país" : "Selecciona una región/provincia"}
                size="small"
                required
              />
            )}
            noOptionsText="No hay regiones/provincias disponibles"
            loadingText="Cargando regiones/provincias..."
          />
        </FormGrid>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGrid>
          <FormLabel htmlFor="city" required>
            Ciudad
          </FormLabel>
          <Autocomplete
            id="city"
            options={cities}
            getOptionLabel={(option) => option.label}
            value={selectedCity}
            onChange={(event, newValue) => handleCityChange(newValue)}
            disabled={isCityDisabled}
            size="small"
            sx={{
              '& .MuiAutocomplete-popupIndicator': {
                padding: '4px',
                height: '100%',
                '& .MuiSvgIcon-root': {
                  fontSize: '1rem',
                },
              },
              '& .MuiAutocomplete-endAdornment': {
                right: '6px',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={isCityDisabled ? "Primero selecciona país y región/provincia" : "Selecciona una ciudad"}
                size="small"
                required
              />
            )}
            noOptionsText="No hay ciudades disponibles"
            loadingText="Cargando ciudades..."
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
    </Grid>
  );
}
