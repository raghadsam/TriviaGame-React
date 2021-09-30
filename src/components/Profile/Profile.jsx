import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReportsTable from "./ReportsTable";
import EditProfile from "./EditProfile";
import UserInfo from "./UserInfo";
import Statistics from "./Statistics";
import UserQuizzes from "./UserQuizzes";
import { dummyReports, dummyUser } from "../../dummy_data";

function Profile() {
  const location = useLocation();
  const [user, setUser] = useState({ ...location.state, ...dummyUser });
  const [reports, setReports] = useState(dummyReports);

  function deleteReport(id) {
    let newReports = reports.filter((report) => report.reportId !== id);
    setReports(newReports);
  }

  function changeName(name) {
    setUser((prev) => ({ ...prev, username: name }));
  }

  return (
    <div>
      <div className="my-3">
        <UserInfo name={user.username} photo={user.photo} />
        <EditProfile changeName={changeName} photo={user.photo} />
        <Statistics />
      </div>
      <UserQuizzes userQuizzes={user.quizzes} />
      <ReportsTable reports={reports} deleteReport={deleteReport} />
    </div>
  );
}

export default Profile;
