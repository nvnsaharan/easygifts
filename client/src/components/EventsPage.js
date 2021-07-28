import React, { useState } from "react";
import "./EventsPage.css";
import Quiz from "./QuizMain";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import "./AllEvents.css";
import quiz1 from "../static/posters/quizposter1.jpg";
import rules from "./constant";

function EventsPage() {
  const [participants, setParticipants] = useState([
    { user: "Naveen", score: "3" },
    { user: "Manoj", score: "3" },
    { user: "Ayush", score: "2" },
    { user: "Nishat", score: "2" },
    { user: "Rao", score: "2" },
  ]);
  const [start, setStart] = useState(false);
  return (
    <div className="EventsPage">
      <div className="score_event_div">
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className="card_media"
              image={quiz1}
              title="quizposter"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Quiz Night
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className="card_body_info">Organiser : TheCode</span>
                <span className="card_body_info">Participants: 128</span>
                <span className="card_body_info">End In : 7days</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <div className="result_board">
          <h3>Score Board</h3>
          {participants.map((participant) => (
            <p className="result_item">
              <span> {participant.user}</span>
              <span> {participant.score}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="quiz_div">
        {start ? (
          <Quiz />
        ) : (
          <>
            <h2>Rules for participants</h2>
            <ol className="rulesList">
              {rules.map((rule) => (
                <li>{rule.text}</li>
              ))}
            </ol>
            <Button
              onClick={() => setStart(true)}
              variant="outlined"
              color="secondary"
            >
              Start
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default EventsPage;
