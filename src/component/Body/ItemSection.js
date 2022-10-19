import React from "react";

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
const ItemSection = ({OpenMod ,surch,ctagoryes}) => {
  
 
  
  return (
    <ItemContainer>
      <ItemContainerOverFlow>
        {ctagoryes.filter(item => item.Active === true).filter(item => item.categoryName.includes(surch))
          .map((filtered, ind) => {
            return (
              <Card key={ind} style={{ margin: "5px", height: "168px",width:"130px",marginBottom:'10px' , boxShadow:'rgb(0 0 0 / 40%) 1px 3px 5px 3px' }} onClick={()=>OpenMod(true)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="50"
                    width="50"
                    image={`http://192.168.29.146:2000${filtered.categoryImage[0].path.slice(6)}`}
                    alt="fishfry Img"
                  />
                  <CardContent style={{ padding: "0",height:"10px", }}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      style={{ marginleft: "",display:'flex',justifyContent:'',alignItems:'center',marginTop:'5px',fontSize:"10px" }}
                      component="div"
                    >
                      {filtered.categoryName}
                    </Typography>
                    <h6 style={{margin:'0'}}>Category :-{filtered.Category}</h6>
                    <Typography
                      gutterBottom
                      variant="body2"
                      style={{ marginleft: "",display:'flex',justifyContent:'',alignItems:'center',marginTop:'5px',fontSize:"8px" }}
                      component="div"
                    >
                       <p style={{margin:'0'}}>West bengal Famous food</p>
                    </Typography>
                    <ItemPrice style={{marginTop:"10px",backgroundColor:"rgba(0, 0, 0,0.4)",height:'50px'}}>
                    <Typography gutterBottom variant="h5" style={{marginBottom:'0',marginLeft:'0',color:"white",fontSize:'12px',fontWeight:"bolder"}}  component="div">
                     <span style={{color:"white",marginLeft:"8px",fontSize:"13px"}}> ₹ </span>400<span style={{backgroundColor:"blueviolet",color:"white",borderRadius:"10px",padding:"6px",marginLeft:'10px'}}>20% off</span> 
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
