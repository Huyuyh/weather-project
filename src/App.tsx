import { useQuery } from '@tanstack/react-query';
import { getWeather } from './api';
import AdditionalInfo from './components/cards/AdditionalInfo';
import CurrentWeather from './components/cards/CurrentWeather';
import DailyForecast from './components/cards/DailyForecast';
import HourlyForecast from './components/cards/HourlyForecast';

function App() {
  const { data } = useQuery({
    queryKey: ['weahter'],
    queryFn: () =>
      getWeather({
        lat: 50,
        lon: 50,
      }),
  });
  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
      <AdditionalInfo />
    </div>
  );
}

export default App;
