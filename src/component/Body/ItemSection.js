import React from "react";
import { useState } from "react";
import { ItemContainer, ItemContainerOverFlow,ItemPrice, Veg } from "./ItemSectionEliment";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
// import Button from "@material-ui/core/Button";
// import {AiFillFileAdd} from 'react-icons/ai'
const ItemSection = ({OpenMod}) => {
  const [items, setItems] = useState([
    {
      id: 1,
      Name: "FishFry",
      Price: "50",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/close-up-of-a-fish-and-chips-platter-with-dipping-sauce-picture-id182690390?b=1&k=20&m=182690390&s=170667a&w=0&h=YCRD3Qe2FnRHeGr7Rf7JWqZnRv13b0nn0UELFM6g0dk=",
    },
    {
      id: 2,
      Name: "Chatni",
      Price: "10",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/indian-chatni-image-close-up-picture-id1361909046?b=1&k=20&m=1361909046&s=170667a&w=0&h=NyGl8tngJ50QXJa5r9tJFlbUKC_ndghvXiiYp3099_o=",
    },
    {
      id: 3,
      Name: "Choumin",
      Price: "70",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/homemade-indochinese-recipe-schezwan-noodles-or-vegetable-hakka-or-picture-id1399868627?b=1&k=20&m=1399868627&s=170667a&w=0&h=puPRhSg3rFqrhQbo92ZkBhFPOE4Jwg_1nuffsY9xSW8=",
    },
    {
      id: 4,
      Name: "biriany",
      Price: "200",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/chicken-biriyani-picture-id1345624336?b=1&k=20&m=1345624336&s=170667a&w=0&h=twUdtaXYy5VPB0-tdRHcqgC4C5WNSFUgcNBPILowg5g=",
    },
    {
      id: 5,
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
    {
      id: 6,
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
    {
      id: 7,
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
    {
      id: 8,
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
    {
      id: 9,
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
    {
      id: 10,
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
    {
      id: 11,
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
  ]);
  return (
    <ItemContainer>
      <ItemContainerOverFlow>
        {items
          .filter((item) => item.Availability === true)
          .map((filtered, ind) => {
            return (
              <Card key={ind} style={{ margin: "5px", height: "170px",marginBottom:'20px' , boxShadow:'rgb(0 0 0 / 40%) 1px 3px 5px 3px' }} onClick={()=>OpenMod(true)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image={`${filtered.Image}`}
                    alt="fishfry Img"
                  />
                  <CardContent style={{ padding: "0" }}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      style={{ marginleft: "5x",display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5px' }}
                      component="div"
                    >
                      {filtered.Name}
                    </Typography>
                    <ItemPrice>
                    <Typography gutterBottom variant="h5" style={{marginBottom:'0',marginLeft:'15px'}}  component="div">
                      ₹{filtered.Price}
                    </Typography>
                  
                    <Veg>
                        
                    <Chip label="" component="a" href="#basic-chip" style={{height:'10px',width:'10px',backgroundColor:'green',marginBottom:'7px'}}/>
                    <Chip label="" component="a" href="#basic-chip" style={{height:'10px',width:'10px',backgroundColor:'red'}}/>
                    </Veg>
                    
                    </ItemPrice>
                    
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button variant="contained" color="primary"  startIcon={<AiFillFileAdd style={{color:'white'}}/>} >
                    Add
                  </Button>
                </CardActions> */}
              </Card>
            );
          })}
      </ItemContainerOverFlow>
    </ItemContainer>
  );
};

export default ItemSection;
