import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className='page-wrapper'>
        <Routes>
          {Object.values(routerConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};
export default AppRouter;
