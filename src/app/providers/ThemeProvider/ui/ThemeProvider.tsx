import { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  ThemeType,
} from '../lib/ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) ||
  ThemeType.LIGHT;
const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
