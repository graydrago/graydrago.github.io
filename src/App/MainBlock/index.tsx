import { ReactNode } from 'react';
import cn from 'classnames';

import css from './styles.module.css';

interface MainBlockProps {
  children: ReactNode;
  state?: 'main' | 'error';
  component?: 'article' | 'section' | 'div';
}

export function MainBlock({
  component = 'article',
  state = 'main',
  children,
}: MainBlockProps) {
  const Component = component;
  const rootClassName = cn(
    css.root,
    css[`${state}_state`],
  );

  return (
    <Component className={rootClassName}>
      {children}
    </Component>
  );
}
