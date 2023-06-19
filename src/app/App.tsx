import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from 'helpers/classNames/classNames';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/main';
import { AboutPage } from 'pages/about';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>theme</button>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
