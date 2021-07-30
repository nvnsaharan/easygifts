import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  ButtonGroup,
  Modal,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import cardscontant from "./cardscontant";
import "./GiftCard.css";
import { useHistory } from "react-router-dom";

export default function GiftCard(props) {
  const [open, setOpen] = useState(false);
  const [amount, setamount] = React.useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [datetime, setDatetime] = useState(false);
  const [confirmPage, setConfirmPage] = useState(false);
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "4ea9adaee37d4364a7be45d8241c8863");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "ARRAffinity=fad2a19bfb1f1b8d4242c88edc8821fdcc9787225220d21ca1ea357be889903d; ARRAffinitySameSite=fad2a19bfb1f1b8d4242c88edc8821fdcc9787225220d21ca1ea357be889903d; ASP.NET_SessionId=kolinwt0pgntmv2ct05s150g"
    );
    var raw = JSON.stringify({
      service: {
        apikey: "4ea9adaee37d4364a7be45d8241c8863",
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://api.blinksky.com/api/v1/catalog", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    if (props.User == null) {
      history.push("/login");
    }
    if (props.participants[0].user !== "Naveen") {
      setName(props.participants[0].user);
      setNumber(props.participants[0].email);
    }
  }, []);

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(function () {
      handleClose();
      setConfirmPage(false);
      setSuccess(false);
    }, 3000);
  };
  const handleOpen = (e) => {
    setamount(e.target.innerText);
    setOpen(true);
    setConfirmPage(false);
    setSuccess(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const successPage = (
    <div className="modal_body">
      <div className="modal_form">
        <div className="success_screen"></div>
      </div>
    </div>
  );

  const confirm = (
    <div className="modal_body">
      <div className="modal_form">
        <div className="loading_screen"></div>
        <Button
          onClick={(e) => handleSuccess()}
          variant="contained"
          size="medium"
          color="secondary"
          key={5}
        >
          please confirm your transaction
        </Button>
      </div>
    </div>
  );
  const body = (
    <div className="modal_body">
      <h2 id="simple-modal-title">Make someones day :)</h2>
      <div className="modal_form">
        <TextField
          key={0}
          id="outlined-helperText"
          label="Receiver's Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          key={1}
          id="outlined-helperText"
          label="Mobile no./Email"
          variant="outlined"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
          key={2}
          id="outlined-helperText"
          label="Amount"
          variant="outlined"
          value={amount}
        />
        <TextField
          key={3}
          id="outlined-helperText"
          label="Message"
          variant="outlined"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {datetime ? (
          <form noValidate>
            <TextField
              key={4}
              id="datetime-local"
              label="Date/Time"
              type="datetime-local"
              variant="outlined"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        ) : (
          ""
        )}

        <Button
          onClick={(e) => setConfirmPage(true)}
          variant="contained"
          size="medium"
          color="primary"
          key={5}
        >
          Send
        </Button>
        <Button
          onClick={(e) => (datetime ? setDatetime(false) : setDatetime(true))}
          className="schedule_btn"
          variant="contained"
          size="medium"
          key={6}
        >
          Schedule for later
        </Button>
      </div>
    </div>
  );
  return (
    <div className="main_div">
      <div className="button-top">
        <ButtonGroup
          variant="contained"
          size="small"
          aria-label="contained primary button group"
        >
          <Button>Anniversary Gift Cards</Button>
          <Button>Clothing Gift Cards </Button>
          <Button>Children Gift Cards</Button>
          <Button>Holiday Gift Cards</Button>
        </ButtonGroup>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {confirmPage ? (success ? successPage : confirm) : body}
      </Modal>
      {cardscontant.map((cards, index) => (
        <div key={index}>
          <div className="event_heading">
            <h1 className="event_type">{cards.caption}</h1>
          </div>
          <div className="cards_div">
            <Card className="card">
              <CardActionArea>
                <CardMedia
                  className="card_media"
                  image={cards.logo}
                  title="quizposter"
                />
              </CardActionArea>
            </Card>
            <div className="button_collections">
              {cards.value.split(",").map((val, index) => (
                <Button
                  key={index}
                  onClick={(e) => handleOpen(e)}
                  className="buttons"
                  variant="outlined"
                  size="medium"
                  color="secondary"
                >
                  {`$ ${val}`}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
