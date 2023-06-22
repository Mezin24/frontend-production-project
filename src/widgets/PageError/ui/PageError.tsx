import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './PageError.module.scss';

 interface PageErrorProps {
 className?: string;
 }
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div className={cls.title}>
        {t('что то пошло не так')}
      </div>
      <Button onClick={refreshPage} theme={ButtonTheme.CLEAR}>
        {t('перезагрузить')}
      </Button>
    </div>
  );
};
