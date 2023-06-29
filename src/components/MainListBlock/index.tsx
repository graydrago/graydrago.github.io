import { ReactNode } from 'react';

import css from './styles.module.css';

interface MainListBlockProps {
  children: ReactNode | ReactNode[];
}

export function MainListBlock({ children }: MainListBlockProps) {
  return (
    <main className={css.main}>
      {children}
    </main>
  );
}
