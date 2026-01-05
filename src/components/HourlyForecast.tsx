import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../api';
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
    <Card title="Hourly Forecast" childrenClassName="flex gap-4">
      {data.hourly.map((hour) => (
        <div className="flex flex-col gap-2"></div>
      ))}
    </Card>
  );
}
