import { ReactNode } from 'react';
import cn from 'classnames';

import css from './styles.module.css';

interface MainBlockProps {
  state?: 'main' | 'error';
  children?: ReactNode;
}

export function MainBlock(props: MainBlockProps) {
  const state = props.state || 'main';
  const rootClassName = cn(
    css.root,
    css[`${state}_state`],
  );

  return (
    <div className={rootClassName}>
      {props.children}
    </div >
  );
}
