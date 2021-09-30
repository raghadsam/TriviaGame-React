import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Trash from "../../assets/trash.svg";
import Unpost from "../Modals/Unpost";

function TableRow(props) {
  const report = props.report;
  return (
    <div className="row m-1">
      <div className="col-9 m-1 grey round-left p-1 text-center">
        {report.message}
      </div>
      <div className="col-1 m-1 p-1 grey text-center">
        <Link to={{ pathname: "/create", state: report.quizId }}>See Quiz</Link>
      </div>
      <div className="col-1 m-1 p-1 grey round-right text-center">
        <button
          style={{ border: "none", background: "transparent" }}
          onClick={() => props.deleteReport(report.reportId)}
        >
          <ReactSVG src={Trash} />
        </button>
      </div>
    </div>
  );
}

export default TableRow;
