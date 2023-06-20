import { useTheme } from 'app/providers/ThemeProvider';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { ThemeType } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Button } from 'shared/ui/Button/';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
      {theme === ThemeType.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
