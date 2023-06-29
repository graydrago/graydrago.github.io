import { Vec2 } from 'utils';

import css from './styles.module.css';

interface AxisProps {
  center: Vec2;
  size: number;
}

export function Axis({ center, size }: AxisProps) {
  return (
    <>
      <line
        className={css.line}
        x1={center.x - size}
        y1={center.y}
        x2={center.x + size}
        y2={center.y}
      />
      <line
        className={css.line}
        x1={center.x}
        y1={center.y - size}
        x2={center.x}
        y2={center.y + size}
      />
    </>
  );
}
