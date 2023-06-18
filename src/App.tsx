import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import { AboutPageAsync } from './pages/about/AboutPage.async';
import { MainPageAsync } from './pages/main/MainPage.async';

const App = () => {
  return (
    <div className='app'>
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
