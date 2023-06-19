import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutPageAsync } from './pages/about/AboutPage.async';
import { MainPageAsync } from './pages/main/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
