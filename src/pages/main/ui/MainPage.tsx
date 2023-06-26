import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <>
      {/* <BugButton /> */}
      <h1>{t('Главная страница')}</h1>
    </>
  );
};
export default MainPage;
