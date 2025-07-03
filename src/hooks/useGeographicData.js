import { useState, useEffect, useMemo } from 'react';
import * as csc from 'country-state-city';

export const useGeographicData = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // Get all countries
  const countries = useMemo(() => {
    return csc.Country.getAllCountries().map(country => ({
      value: country.isoCode,
      label: country.name,
      ...country
    }));
  }, []);

  // Get states for selected country
  const states = useMemo(() => {
    if (!selectedCountry) return [];
    return csc.State.getStatesOfCountry(selectedCountry.value).map(state => ({
      value: state.isoCode,
      label: state.name,
      ...state
    }));
  }, [selectedCountry]);

  // Get cities for selected state
  const cities = useMemo(() => {
    if (!selectedCountry || !selectedState) return [];
    return csc.City.getCitiesOfState(selectedCountry.value, selectedState.value).map(city => ({
      value: city.name,
      label: city.name,
      ...city
    }));
  }, [selectedCountry, selectedState]);

  // Reset dependent selections when parent changes
  useEffect(() => {
    if (selectedCountry) {
      setSelectedState(null);
      setSelectedCity(null);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setSelectedCity(null);
    }
  }, [selectedState]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return {
    countries,
    states,
    cities,
    selectedCountry,
    selectedState,
    selectedCity,
    handleCountryChange,
    handleStateChange,
    handleCityChange,
    isStateDisabled: !selectedCountry,
    isCityDisabled: !selectedCountry || !selectedState,
  };
}; 