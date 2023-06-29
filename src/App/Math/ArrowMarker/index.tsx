import { useContext } from 'react';

import { GridContext } from '../GridContext';
import css from './styles.module.css';

const SIZE = 4;
const HALF_SIDE = SIZE / 2;
const POINTS = `0 0, ${SIZE} ${HALF_SIDE}, 0 ${SIZE}`;

export function ArrowMarker() {
  const context = useContext(GridContext);

  return (
    <marker
      id={context.arrowMarkerId}
      className={css.root}
      markerWidth={SIZE}
      markerHeight={SIZE}
      refX="0"
      refY={HALF_SIDE}
      orient="auto"
    >
      <polygon points={POINTS} />
    </marker>
  );
}
