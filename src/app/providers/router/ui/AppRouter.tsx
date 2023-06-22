import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <div className="page-wrapper">
      <Routes>
        {Object.values(routerConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  </Suspense>
);

export default AppRouter;
