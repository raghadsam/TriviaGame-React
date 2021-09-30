import React from "react";
import { Container } from "react-bootstrap";
import TableRow from "./TableRow";

function ReportsTable(props) {
  return (
    <Container>
      <div className="mx-2 my-3">
        <div className="row m-1">
          <div className="grey m-1 col-md-2 rounded-pill text-center bold align-middle">
            <h5 className="m-1 ">Reports</h5>
          </div>
        </div>
        {props.reports.map((report, index) => (
          <TableRow
            key={index}
            report={report}
            deleteReport={props.deleteReport}
          />
        ))}
      </div>
    </Container>
  );
}

export default ReportsTable;
