import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../api';
import Card from './Card';

// type Props = {};

export default function DailyForecast() {
  const { data } = useSuspenseQuery({
    queryKey: ['weahter'],
    queryFn: () =>
      getWeather({
        lat: 50,
        lon: 50,
      }),
  });

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.daily.map((day) => (
        <div key={day.dt} className="flex justify-between">
          <p className="w-9">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: 'short',
            })}
          </p>
          <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather icon" />
          <p>{Math.round(day.temp.day)}F</p>
          <p className="text-gray-500/75">{day.temp.min}</p>
          <p className="text-gray-500/75">{day.temp.max}</p>
        </div>
      ))}
    </Card>
  );
}
