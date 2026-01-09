import { useTheme } from './ThemeProvider';
import { Switch } from './ui/switch';
import Moon from '/src/assets/moon.svg?react';
import Sun from '/src/assets/sun.svg?react';

type Props = {};

export default function LightDarkToggle({}: Props) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <Sun className="size-5" />
      <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
      <Moon className="size-5" />
    </div>
  );
}
