import { Button } from "@material-ui/core";
import React from "react";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";

function Dashboard({ participants }) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/gifts");
  };
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
          <Button
            onClick={(e) => handleClick()}
            className="span_elem"
            size="small"
          >
            Send
          </Button>
        </p>
      ))}
    </div>
  );
}

export default Dashboard;
