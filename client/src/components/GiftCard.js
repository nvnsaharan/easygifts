import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import quiz1 from "../static/posters/quizposter1.jpg";
const cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '30vw',
    paddingTop:'3vw',
    marginTop:'5vw'
}
const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
  };
export default function GiftCard() {
  return (
      <div>
    <h1 style={{textAlign:'center'}}> Gift Cards</h1>
      <div style={{display:'flex', justifyContent:'center'}}>
      
    <Card style={cardStyle}>
      
      <CardMedia
        className={styles.media}
        image={quiz1}
      />
      <h3 style={{textAlign:'center'}}>Amazon Gift Card</h3>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}
