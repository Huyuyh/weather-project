import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '../../api';
import Card from './Card';
import Cloud from '/src/assets/cloud.svg?react';
import Pressure from '/src/assets/pressure.svg?react';
import Sunrise from '/src/assets/sunrise.svg?react';
import Sunset from '/src/assets/sunset.svg?react';
import UpArrow from '/src/assets/uparrow.svg?react';
import Uv from '/src/assets/uv.svg?react';
import Wind from '/src/assets/wind.svg?react';

// type Props = {};

export default function AdditionalInfo() {
  const { data } = useSuspenseQuery({
    queryKey: ['weahter'],
    queryFn: () =>
      getWeather({
        lat: 50,
        lon: 50,
      }),
  });

  return (
    <Card title="Additional Weather Info" childrenClassName="flex flex-col gap-8">
      {rows.map(({ label, value, Icon }) => (
        <div key={value} className="flex justify-between">
          <div className="flex gap-4">
            <span className="text-gray-500">{label}</span>
            <Icon className="size-8 invert" />
          </div>
          <span>
            <FormatComponent value={value} number={data.current[value]} />
          </span>
        </div>
      ))}
    </Card>
  );
}

function FormatComponent({ value, number }: { value: string; number: number }) {
  if (value === 'sunrise' || value === 'sunset')
    return new Date(number * 1000).toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

  if (value === 'wind_deg') return <UpArrow className="size-8 invert" style={{ transform: `rotate(${number}deg)` }} />;

  return number;
}

const rows = [
  {
    label: 'Cloudiness (%)',
    value: 'clouds',
    Icon: Cloud,
  },
  {
    label: 'UV Index',
    value: 'uvi',
    Icon: Uv,
  },
  {
    label: 'Wind Direction',
    value: 'wind_deg',
    Icon: Wind,
  },
  {
    label: 'Pressure (hPa)',
    value: 'pressure',
    Icon: Pressure,
  },
  {
    label: 'Sunrise',
    value: 'sunrise',
    Icon: Sunrise,
  },
  {
    label: 'Sunset',
    value: 'sunset',
    Icon: Sunset,
  },
] as const;
