import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <AppRouter />
    </div>
  );
};
export default App;
