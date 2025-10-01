import { NavLink } from 'react-router-dom';

import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs.ts';

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className="lg:flex hidden items-center gap-2 text-sm text-black-80 pb-4">
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <NavLink to={item.href} className="hover:text-black-60 transition-colors">
              {item.title}
            </NavLink>
          ) : (
            <span className="text-black">{item.title}</span>
          )}

          {index < breadcrumbs.length - 1 && <span>/</span>}
        </div>
      ))}
    </nav>
  );
};
