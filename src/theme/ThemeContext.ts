import { createContext } from 'react';

export type ThemeType = 'light' | 'dark';

interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
