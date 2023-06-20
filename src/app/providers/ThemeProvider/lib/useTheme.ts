import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeType,
} from './ThemeContext';

interface UseThemeResult {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
