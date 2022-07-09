import React from "react";
import ChartEntry from "./ChartEntry";
import "./Chart.css";

function Chart(props) {
  const values = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartEntry
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}

export default Chart;
