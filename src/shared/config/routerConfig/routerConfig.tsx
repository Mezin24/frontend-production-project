import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePats: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePats.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePats.about,
    element: <AboutPage />,
  },
};
