import { Vec2 } from 'utils';

import css from './styles.module.css';

export interface PointProps {
  center: Vec2;
}

export function Point({ center }: PointProps) {
  return (
    <circle
      className={css.root}
      cx={center.x}
      cy={center.y}
    />
  );
}
