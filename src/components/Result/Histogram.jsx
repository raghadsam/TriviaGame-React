import React from "react";
import { Bar } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
/* eslint-disable no-debugger, no-console */

export default function Histogram() {
  const score = useLocation();
  const data = {
    labels: ["Your Score", "Average Score"],
    datasets: [
      {
        label: "Score",
        backgroundColor: ["#1a73e8", "#C4C4C4"],
        borderColor: ["#1a73e8", "#C4C4C4"],
        borderWidth: 1,
        barThickness: 50,
        data: [score.state.score, 3.2],
      },
    ],
  };

  return (
    <div id="Histogram">
      <Bar height="1500px" width="1500px" data={data} />
      {console.log(score)}
    </div>
  );
}
