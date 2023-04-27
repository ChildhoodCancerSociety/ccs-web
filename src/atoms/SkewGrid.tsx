"use client";

import { useEffect, useId } from "react";

const classConfigs: string[] = [
  "from-emerald-900/75 to-emerald-200",
  "from-teal-900/75 to-teal-200",
  "from-lime-900/75 to-lime-200",
];

const createStar = () => {};
const createStarAnimation = () => {};
const createShootingStars = (
  gridElement: HTMLDivElement,
  gridArea: { rows: number; cols: number }
) => {
  const { rows, cols } = gridArea;
};

const gridTemplateCss = (gridArea: number | string) =>
  `repeat(${gridArea},minmax(0,1fr))`;

interface SkewGridProps {
  cols?: number;
  rows?: number;
}
const SkewGrid: React.FC<SkewGridProps> = ({ cols = 30, rows = 60 }) => {
  const id = useId();
  const skewGridId = `skewgrid-${id}`;

  useEffect(() => {
    const grid = document.getElementById(skewGridId);
  }, []);

  return (
    <div
      id={skewGridId}
      className="absolute -top-20 bottom-0 left-0 right-0 -z-10 grid -skew-y-[10deg] bg-primary-200 transition-all duration-100"
      style={{
        gridTemplateRows: gridTemplateCss(rows),
        gridTemplateColumns: gridTemplateCss(cols),
      }}
    >
      <div className="rounded-xs bg-primary-950" />
      <div className="col-start-[20] row-start-[20] bg-green-900" />
    </div>
  );
};

export default SkewGrid;
