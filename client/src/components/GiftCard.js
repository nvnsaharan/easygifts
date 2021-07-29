import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import quiz1 from "../static/posters/quizposter1.jpg";
import axios from "../util/axios";

export default function GiftCard() {
  useEffect(() => {
    axios
      .post("/catalog", {
        service: {
          apikey: "4ea9adaee37d4364a7be45d8241c8863",
        },
      })
      .then((response) => console.log(response));
  }, []);
  return <div></div>;
}
