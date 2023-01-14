import React, { useEffect, useRef } from "react";
import { animated as a, useResize, useSpring } from "@react-spring/web";

interface ScrollContainerProps {
  children: React.ReactNode;
  onScroll: (value: number) => void;
}
export function ScrollContainer({ children, onScroll }: ScrollContainerProps) {
  const [{ y }, set] = useSpring(() => ({
    y: [0],
    config: {
      mass: 1,
      tension: 280,
      friction: 120,
      precision: 0.00001,
      velocity: 0,
      clamp: true,
    },
  }));

  const viewportRef = useRef<HTMLDivElement>(null);

  const { height } = useResize({
    container: viewportRef as unknown as React.MutableRefObject<HTMLElement>,
  });

  useEffect(() => {
    const handleScroll = () => {
      onScroll(-window.pageYOffset);
    };
    // set({ y: [-window.pageYOffset] });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [set]);

  return (
    <>
      <a.div
        ref={viewportRef}
        style={{ transform: y.interpolate((y) => `translate3d(0,${y}px,0)`) }}
        className="scroll-container"
      >
        {children}
      </a.div>
      <a.div style={{ height }} />
    </>
  );
}
