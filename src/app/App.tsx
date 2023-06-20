import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <button>theme</button>
      <AppRouter />
    </div>
  );
};
export default App;
