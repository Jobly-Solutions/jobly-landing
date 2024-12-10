"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { User, Building2 } from 'lucide-react';
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border border-gray-100 bg-white p-3 shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";


export function IntegrationDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const driveRef = useRef<HTMLDivElement>(null);
  const blankRef1 = useRef<HTMLDivElement>(null);
  const blankRef2 = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-white p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg max-h-[300px] items-stretch justify-between gap-10">
        <div className="flex flex-col items-center justify-center">
          <Circle ref={companyRef} className="size-16 bg-blue-50">
            <Building2 className="h-8 w-8 text-blue-600" />
          </Circle>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Circle ref={centerRef} className="size-20 border-0 bg-blue-600 p-0 overflow-hidden">
            <Image 
              src="/jobly-logo.png"
              alt="Jobly"
              width={80}
              height={80}
              className="size-full object-cover"
            />
          </Circle>
        </div>

        <div className="flex flex-col items-stretch justify-between">
          <Circle ref={driveRef}>
            <User className="h-7 w-7 text-blue-600" />
          </Circle>
          <Circle ref={blankRef1}>
            <User className="h-7 w-7 text-blue-600" />
          </Circle>
          <Circle ref={blankRef2}>
            <User className="h-7 w-7 text-blue-600" />
          </Circle>
          <Circle ref={messageRef}>
            <User className="h-7 w-7 text-blue-600" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={companyRef}
        toRef={centerRef}
        curvature={50}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={driveRef}
        curvature={75}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={blankRef1}
        curvature={25}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={blankRef2}
        curvature={-25}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={messageRef}
        curvature={-75}
        reverse
      />
    </div>
  );
}

