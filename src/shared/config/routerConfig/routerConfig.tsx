import { AboutPage } from 'pages/about';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/not_found';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePats: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePats.not_found,
    element: <NotFoundPage />,
  },
};
