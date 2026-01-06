import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getGeocode } from './api';
import AdditionalInfo from './components/cards/AdditionalInfo';
import CurrentWeather from './components/cards/CurrentWeather';
import DailyForecast from './components/cards/DailyForecast';
import HourlyForecast from './components/cards/HourlyForecast';
import LocationDropdown from './components/dropdowns/LocationDropdown';
import Map from './components/Map';
import type { Coords } from './types';

function App() {
  const [coordinates, setCoords] = useState<Coords>({ lat: 50, lon: 25 });
  const [location, setLocation] = useState('Tokyo');

  const { data: geocode } = useQuery({
    queryKey: ['geocode', location],
    queryFn: () => getGeocode(location),
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({
      lat,
      lon,
    });
    setLocation('custom');
  };

  const coords = location === 'custom' ? coordinates : { lat: geocode?.[0].lat ?? 0, lon: geocode?.[0].lon ?? 0 };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown location={location} setLocation={setLocation} />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
