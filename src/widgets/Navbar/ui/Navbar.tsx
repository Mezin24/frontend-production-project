import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePats } from 'shared/config/routerConfig/routerConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={RoutePats.main}>{t('Главная')}</AppLink>
        <AppLink to={RoutePats.about}>{t('О нас')}</AppLink>
      </div>
    </div>
  );
};
