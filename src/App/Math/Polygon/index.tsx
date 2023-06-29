import { useMemo } from 'react';
import { Vec2 } from 'utils';

import css from './styles.module.css';

export interface PolygonProps {
  points: Vec2[];
}

export function Polygon({ points }: PolygonProps) {
  const stringifiedPoints = useMemo(
    () => points.map(({ x, y }) => `${x} ${y}`).join(','),
    [points],
  );

  return (
    <polygon
      className={css.root}
      points={stringifiedPoints}
    />
  );
}
