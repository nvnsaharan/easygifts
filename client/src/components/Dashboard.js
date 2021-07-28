import { Button } from "@material-ui/core";
import React from "react";
import "./Dashboard.css";

function Dashboard({ participants }) {
  return (
    <div className="dashboard_div">
      <h1>Score Board</h1>
      {participants.map((participant, index) => (
        <p key={index} className="result_item">
          <span className="span_elem" key={1}>
            {participant.user}
          </span>
          <span className="span_elem" key={2}>
            {participant.score}
          </span>
          <Button className="span_elem" size="small">
            Send
          </Button>
        </p>
      ))}
    </div>
  );
}

export default Dashboard;
