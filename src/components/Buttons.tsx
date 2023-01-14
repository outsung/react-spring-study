import React from "react";

interface ButtonsProps {
  addContent: () => void;
  deleteContent: () => void;
}
export function Buttons({ addContent, deleteContent }: ButtonsProps) {
  return (
    <div className="btn-group">
      <button className="btn" onClick={addContent}>
        + add content
      </button>
      <button className="btn" onClick={deleteContent}>
        delete content
      </button>
    </div>
  );
}
