import { useQuery } from '@tanstack/react-query';
import { getWeather } from './api';
import Card from './components/Card';
import DailyForecast from './components/DailyForecast';

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
      <Card title="Current Weather">{JSON.stringify(data?.current)}</Card>
      <Card title="Hourly Forecast">{JSON.stringify(data?.hourly)}</Card>
      <Card title="Daily Forecast">{JSON.stringify(data?.daily)}</Card>
      <DailyForecast></DailyForecast>
    </div>
  );
}

export default App;
