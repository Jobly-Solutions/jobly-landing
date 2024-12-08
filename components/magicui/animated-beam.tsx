"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  endYOffset?: number;
  reverse?: boolean;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
}: AnimatedBeamProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current || !pathRef.current || !progressRef.current) {
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const fromRect = fromRef.current.getBoundingClientRect();
    const toRect = toRef.current.getBoundingClientRect();

    const from: Point = {
      x: fromRect.left - containerRect.left + fromRect.width / 2,
      y: fromRect.top - containerRect.top + fromRect.height / 2,
    };

    const to: Point = {
      x: toRect.left - containerRect.left + toRect.width / 2,
      y: toRect.top - containerRect.top + toRect.height / 2 + (endYOffset || 0),
    };

    const curve = curvature || Math.min(100, Math.abs(to.x - from.x) / 2);
    const curveX = reverse ? -curve : curve;
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;

    const path = `M ${from.x},${from.y} Q ${midX + curveX},${midY} ${to.x},${to.y}`;

    pathRef.current.setAttribute("d", path);
    progressRef.current.setAttribute("d", path);
  }, [containerRef, fromRef, toRef, curvature, endYOffset, reverse]);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{
        filter: "drop-shadow(0 0 1px rgba(37, 99, 235, 0.1))",
      }}
    >
      <path
        ref={pathRef}
        className="stroke-blue-100"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.5"
      />
      <path
        ref={progressRef}
        className="stroke-blue-500"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
        opacity="0.8"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="3s"
          values="0;-8"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}

