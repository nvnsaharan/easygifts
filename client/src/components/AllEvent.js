import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  MenuItem,
  Modal,
  Typography,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import React, { useState } from "react";
import "./AllEvents.css";
import quiz1 from "../static/posters/quizposter1.jpg";
import quiz4 from "../static/posters/poster4.png";
import quiz2 from "../static/posters/poster2.jpg";
import quiz3 from "../static/posters/poster3.jpg";
import quiz5 from "../static/posters/poster5.jpg";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";

function AllEvent() {
  const [open, setOpen] = useState(false);

  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className="modal_body">
      <h2 id="simple-modal-title">Host an Event</h2>
      <div className="modal_form">
        <TextField
          id="outlined-helperText"
          label="Organisation Name"
          variant="outlined"
        />
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={handleChange}
            label="Type"
          >
            <MenuItem value={10}>Quiz</MenuItem>
            <MenuItem value={20}>Photography</MenuItem>
            <MenuItem value={30}>Writing</MenuItem>
            <MenuItem value={40}>Extra</MenuItem>
          </Select>
        </FormControl>
        <form noValidate>
          <TextField
            id="date"
            variant="outlined"
            label="Start Date"
            type="date"
            defaultValue="2021-07-31"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <form noValidate>
          <TextField
            id="date"
            variant="outlined"
            label="End Date"
            type="date"
            defaultValue="2021-07-31"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button variant="contained" size="large" color="primary">
          HOST
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="event_heading top_card">
        <Card className="card" onClick={handleOpen}>
          <CardActionArea>
            <CardMedia
              className="card_media"
              image={quiz5}
              title="quizposter"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                HOST AN EVENT
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button variant="contained" size="small" color="primary">
              HOST
            </Button>
          </CardActions>
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <div className="event_heading">
        <h1 className="event_type">LIVE</h1>
        <div className="long_line"></div>
      </div>
      <div className="event_heading">
        <Card className="card">
          <Link className="card_link" to="events-quiz-night">
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
          </Link>
          <CardActions>
            <Button variant="contained" size="small" color="primary">
              Start Now
            </Button>
            <Link className="card_link" to="dashboard">
              <Button size="small" color="primary">
                Share
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
      <div className="event_heading">
        <h1 className="event_type">UPCOMING</h1>
        <div className="long_line"></div>
      </div>
      <div className="upcoming_event_heading">
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className="card_media"
              image={quiz2}
              title="quizposter"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Wild Guess
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className="card_body_info">Organiser : Fidled Mind </span>
                <span className="card_body_info">Registered : 59</span>
                <span className="card_body_info">Start In : 2days</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small" color="primary">
              Register
            </Button>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className="card_media"
              image={quiz3}
              title="quizposter"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Take a Shot
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className="card_body_info">
                  Organiser : Photo Monkey{" "}
                </span>
                <span className="card_body_info">Registered : 23</span>
                <span className="card_body_info">Start In : 9days</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small" color="primary">
              Register
            </Button>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className="card_media"
              image={quiz4}
              title="quizposter"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Write Your Mind
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className="card_body_info">Organiser : G-School</span>
                <span className="card_body_info">Registered : 8</span>
                <span className="card_body_info">Start In : 15days</span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" size="small" color="primary">
              Register
            </Button>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default AllEvent;
