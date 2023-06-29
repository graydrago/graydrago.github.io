import { useContext } from 'react';
import { Vec2 } from 'utils';

import { GridContext } from '../GridContext';

import css from './styles.module.css';

const OFFSET = 0.4;

export interface ArrowProps {
  start: Vec2;
  end: Vec2;
}

export function Arrow({ start, end }: ArrowProps) {
  const context = useContext(GridContext);
  const endOffset = end.sub(end.norm().mulScalar(OFFSET));

  return (
    <line
      className={css.root}
      x1={start.x}
      y1={start.y}
      x2={endOffset.x}
      y2={endOffset.y}
      markerEnd={`url(#${context.arrowMarkerId})`}
    />
  );
}
