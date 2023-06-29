import { ReactNode } from 'react';
import cn from 'classnames';

import { BBox } from 'types';

import css from './styles.module.css';

interface GridLinesProps {
  bbox: BBox;
  type: 'axis' | 'grid';
  step: number;
}

function loop(min: number, max: number, step: number, fn: (v: number) => ReactNode): ReactNode[] {
  const nodes: ReactNode[] = [];

  for (let i = min + step; i < max; i += step) {
    nodes.push(fn(i));
  }

  return nodes;
}

export function GridLines({ bbox, step, type }: GridLinesProps) {
  const lineClass = cn(
    css.line,
    css[`type_${type}`],
  );

  return (
    <>
      {loop(bbox.y, bbox.y + bbox.height, step, (y) => (
        <line
          key={y}
          className={lineClass}
          x1={bbox.x}
          y1={y}
          x2={bbox.x + bbox.width}
          y2={y}
        />
      ))}
      {loop(bbox.x, bbox.x + bbox.width, step, (x) => (
        <line
          key={x}
          className={lineClass}
          x1={x}
          y1={bbox.y}
          x2={x}
          y2={bbox.y + bbox.height}
        />
      ))}
    </>
  );
}
