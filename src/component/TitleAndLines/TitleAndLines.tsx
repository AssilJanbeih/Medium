import "./TitleAndLines.scss";
import React from "react";

interface TitleAndLinesProps {
  title: string;
  page: string;
  lines: { id: string; name: string }[];
}

export const TitleAndLines = ({ title, lines, page }: TitleAndLinesProps) => {
  return (
    <>
      <div className="titles-menu">
          <h5>{title}</h5>
      </div>
      <div className="lines">
        {lines.map((line, index) => (
          <p key={index}></p>
        ))}
      </div>
    </>
  );
};