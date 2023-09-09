import { Link } from 'react-router-dom';

import { PAGES } from './pages';

export function Links() {
  return (
    <>
      {PAGES.map((page) => (
        <Link
          key={page.name}
          to={page.component.name}
          relative='path'
        >
          {page.name}
        </Link>
      ))}
    </>
  );
}
