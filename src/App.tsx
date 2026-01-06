import { useState } from 'react';
import AdditionalInfo from './components/cards/AdditionalInfo';
import CurrentWeather from './components/cards/CurrentWeather';
import DailyForecast from './components/cards/DailyForecast';
import HourlyForecast from './components/cards/HourlyForecast';
import Map from './components/Map';
import type { Coords } from './types';

function App() {
  const [coords, setCoords] = useState<Coords>({ lat: 50, lon: 25 });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({
      lat,
      lon,
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
