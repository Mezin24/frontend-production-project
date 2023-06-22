import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import NotFound from '../assets/icons/undraw_page_not_found_re_e9o6.svg';

 interface NotFoundPageProps {
 className?: string;
 }
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      <div className={cls.title}>{t('Страница не найдена')}</div>
      <NotFound className={cls.img} />
    </div>
  );
};
