import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<h1>{t('загрузка')}</h1>}>
      <div className="page-wrapper">
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
