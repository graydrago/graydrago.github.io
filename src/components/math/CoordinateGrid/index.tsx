import { ReactNode, PointerEventHandler } from 'react';

import { BBox } from 'types';

import css from './styles.module.css';

export interface CoordinateGridProps {
  bbox: BBox;
  children: ReactNode;
  defs?: ReactNode;
  onPointerDown?: PointerEventHandler<SVGSVGElement>
}

export function CoordinateGrid({
  bbox,
  children,
  defs,
  onPointerDown,
}: CoordinateGridProps) {
  return (
    <svg
      className={css.root}
      viewBox={`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`}
      transform="scale(1, -1)"
      onPointerDown={onPointerDown}
    >
      <defs>
        {defs}
      </defs>
      {children}
    </svg>
  );
}
