import React from "react";
import "./ChartEntry.css";

function ChartEntry(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-entry">
      <div className="chart-entry-bar">
        <div
          className="chart-entry-fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-entry-label">{props.label}</div>
    </div>
  );
}

export default ChartEntry;
