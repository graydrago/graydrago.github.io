import { useId, useState } from 'react';

import {
  ArrowMarker,
  Axis,
  CoordinateGrid,
  CoordinateGridProps,
  GridContext,
  GridLines,
  Point,
  Polygon,
} from 'components/math';
import { BBox } from 'types/index';
import { Vec2 } from 'utils/vec';

const VIEW_BOUNDS: BBox = {
  x: -6,
  y: -6,
  width: 12,
  height: 12,
};

export function PolygonEditor() {
  const context = {
    arrowMarkerId: useId(),
  };

  const [points, setPoints] = useState<Vec2[]>([]);

  const handlePointerDown: CoordinateGridProps['onPointerDown'] = (event) => {
    const svg = event.currentTarget;
    const domPoint = svg.createSVGPoint();
    domPoint.x = event.nativeEvent.clientX;
    domPoint.y = event.nativeEvent.clientY;
    const svgPoint = domPoint.matrixTransform(svg.getScreenCTM()?.inverse());
    const point = new Vec2(svgPoint.x, svgPoint.y);
    setPoints((p) => [...p, point]);
  };

  return (
    <GridContext.Provider value={context}>
      <CoordinateGrid
        bbox={VIEW_BOUNDS}
        defs={<ArrowMarker />}
        onPointerDown={handlePointerDown}
      >
        <GridLines bbox={VIEW_BOUNDS} step={1} />
        <Axis
          center={new Vec2(0, 0)}
          size={VIEW_BOUNDS.width}
        />
        <Polygon points={points} />
        {points.map((point) => (
          <Point
            key={String(point)}
            center={point}
          />
        ))}
      </CoordinateGrid>
    </GridContext.Provider>
  );
}
