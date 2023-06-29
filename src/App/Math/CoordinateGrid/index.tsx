import { ReactNode } from 'react';

import { BBox } from 'types';

import css from './styles.module.css';

export interface CoordinateGridProps {
  children: ReactNode;
  bbox: BBox;
  defs?: ReactNode;
}

export function CoordinateGrid({ children, defs, bbox }: CoordinateGridProps) {
  return (
    <svg
      className={css.root}
      viewBox={`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`}
    >
      <defs>
        {defs}
      </defs>
      <g transform="scale(1, -1)">
        {children}
      </g>
    </svg>
  );
}
