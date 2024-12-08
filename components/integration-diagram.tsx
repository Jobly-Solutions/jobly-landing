"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { User, MessageCircle, Building2 } from 'lucide-react';
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

const Icons = {
  googleDrive: () => (
    <svg className="h-7 w-7" viewBox="0 0 87.3 78">
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
    </svg>
  ),
  blank: () => (
    <div className="h-7 w-7 rounded-full bg-gray-100" />
  ),
};

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

