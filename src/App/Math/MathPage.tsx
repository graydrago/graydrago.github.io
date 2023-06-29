import { useId } from 'react';
import { Vec2 } from 'utils';

import { MainBlock, MainListBlock } from 'components';
import { BBox } from 'types';

import { CoordinateGrid } from './CoordinateGrid';
import { Arrow } from './Arrow';
import { GridContext } from './GridContext';
import { ArrowMarker } from './ArrowMarker';
import { GridLines } from './GridLines';
import { Point } from './Point';
import { Polygon } from './Polygon';

const VIEW_BOUNDS: BBox = {
  x: -6,
  y: -6,
  width: 12,
  height: 12,
};

export function MathPage() {
  const context = {
    arrowMarkerId: useId(),
  };

  return (
    <MainListBlock>
      <MainBlock>
        <h1>Math</h1>
      </MainBlock>
      <MainBlock>
        <GridContext.Provider value={context}>
          <CoordinateGrid bbox={VIEW_BOUNDS} defs={<ArrowMarker />}>
            <GridLines bbox={VIEW_BOUNDS} step={1} type="grid" />
            <GridLines bbox={VIEW_BOUNDS} step={6} type="axis" />
            <Point center={new Vec2(-3, 3)} />
            <Point center={new Vec2(4, 4)} />
            <Arrow start={Vec2.ZERO} end={new Vec2(4, 4)} />
            <Polygon points={[new Vec2(1, -1), new Vec2(4, -1), new Vec2(4, -4), new Vec2(1, -4)]} />
          </CoordinateGrid>
        </GridContext.Provider>
      </MainBlock>
    </MainListBlock>
  );
}
