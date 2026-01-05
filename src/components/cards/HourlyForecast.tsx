import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../../api';
import WeatherIcon from '../WeatherIcon';
import Card from './Card';

// type Props = {};

export default function HourlyForecast() {
  const { data } = useSuspenseQuery({
    queryKey: ['weahter'],
    queryFn: () =>
      getWeather({
        lat: 50,
        lon: 50,
      }),
  });

  return (
    <Card title="Hourly Forecast (48 Hours)" childrenClassName="flex gap-4 overflow-x-scroll">
      {data.hourly.map((hour) => (
        <div key={hour.dt} className="flex flex-col items-center gap-2 p-2">
          <p className="w-9 whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
            })}
          </p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p>{Math.round(hour.temp)}F</p>
        </div>
      ))}
    </Card>
  );
}
