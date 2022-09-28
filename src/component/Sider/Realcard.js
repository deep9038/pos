import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Realcard.css";

const Realcard = ({item}) => {
  return (
    <li>
      <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="60"
        image={item.Image}
      />
      <CardContent style={{margin:'0',padding:'0'}}>
        <Typography gutterBottom variant="body2" component="div">
          {item.Name}
        </Typography>
      
      </CardContent>
     
    </Card>
      </li>
  );
};

export default Realcard;
