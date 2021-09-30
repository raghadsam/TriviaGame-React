import React from "react";
import { useLocation } from "react-router-dom";
function ScoreSummary() {
  const score = useLocation();
  return (
    <div>
      <h4>Your Score: {score.state.score}</h4>
      <h4>Average Score: 3.2</h4>
      <h4>Total Plays: 8632</h4>
    </div>
  );
}

export default ScoreSummary;
