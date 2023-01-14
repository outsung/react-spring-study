import React from "react";

interface DummyContentProps {
  content: number;
}
export function DummyContent({ content }: DummyContentProps) {
  return (
    <>
      {[...new Array(content)].map((_, i) => (
        <div key={i} className="dummy-content">
          <span>SCROLL DOWN</span>
          <span className="arrow-down">&#8595;</span>
        </div>
      ))}
    </>
  );
}
