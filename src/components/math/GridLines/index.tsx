import { ReactNode } from 'react';

import { BBox } from 'types';

import css from './styles.module.css';

interface GridLinesProps {
  bbox: BBox;
  step: number;
}

function loop(min: number, max: number, step: number, fn: (v: number) => ReactNode): ReactNode[] {
  const nodes: ReactNode[] = [];

  for (let i = min + step; i < max; i += step) {
    nodes.push(fn(i));
  }

  return nodes;
}

export function GridLines({ bbox, step }: GridLinesProps) {
  return (
    <>
      {loop(bbox.y, bbox.y + bbox.height, step, (y) => (
        <line
          key={y}
          className={css.line}
          x1={bbox.x}
          y1={y}
          x2={bbox.x + bbox.width}
          y2={y}
        />
      ))}
      {loop(bbox.x, bbox.x + bbox.width, step, (x) => (
        <line
          key={x}
          className={css.line}
          x1={x}
          y1={bbox.y}
          x2={x}
          y2={bbox.y + bbox.height}
        />
      ))}
    </>
  );
}
