import { useLocation } from 'react-router-dom';

const pathToTitleMap: { [key: string]: string } = {
  '': 'Главная',
  liked: 'Избранное',
};

export const useBreadcrumbs = () => {
  const location = useLocation();

  const pathNames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = pathNames.map((path, index) => {
    const href = `/${pathNames.slice(0, index + 1).join('/')}`;

    const title = pathToTitleMap[path] || path;

    return {
      title,
      href: index === pathNames.length - 1 ? undefined : href,
    };
  });

  return [{ title: 'Главная', href: '/' }, ...breadcrumbs];
};
