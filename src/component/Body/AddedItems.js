import React from "react";
import {
  AddedItemContainer,
  ItemImg,
  ItemImgcontainer,
  ItemMenu,
  ItemQuantity,
  ShowQuantity,
  ItemDetails
} from "./AddedItemsEliment";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Typography from "@material-ui/core/Typography";


const AddedItems = () => {
  return (
    <AddedItemContainer >
      <ItemMenu style={{backgroundColor:"rgb(176, 116, 232)",color:"white"}}>
        <ItemImgcontainer>
          <ItemImg src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ItemImgcontainer>
        <ItemDetails >
        <Typography
          variant="subtitle2"
          style={{ marginBottom: "0" }}
        >
          chumin
        </Typography>
        <Typography
          variant="overline"
          style={{ marginBottom: "0" ,lineHeight:'20px'}}
         
        >
          ₹100
        </Typography>
        </ItemDetails>
        
        <ItemQuantity>
          <AiOutlinePlus />
          <ShowQuantity>
            <Typography variant="body1" display="block" gutterBottom>
              1
            </Typography>
          </ShowQuantity>
          <AiOutlineMinus />
        </ItemQuantity>
        <MdDelete style={{color:"red"}}/>
      </ItemMenu >
      <ItemMenu style={{backgroundColor:"rgb(176, 116, 232)",color:"white"}}>
        <ItemImgcontainer>
          <ItemImg src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ItemImgcontainer>
        <ItemDetails>
        <Typography
          variant="subtitle2"
          style={{ marginBottom: "0" }}
        >
          chumin
        </Typography>
        <Typography
          variant="overline"
          style={{ marginBottom: "0" ,lineHeight:'20px'}}
         
        >
          ₹100
        </Typography>
        </ItemDetails>
        
        <ItemQuantity>
          <AiOutlinePlus />
          <ShowQuantity>
            <Typography variant="body1" display="block" gutterBottom>
              1
            </Typography>
          </ShowQuantity>
          <AiOutlineMinus />
        </ItemQuantity>
        <MdDelete style={{color:"red"}}/>
      </ItemMenu>
      <ItemMenu style={{backgroundColor:"rgb(176, 116, 232)",color:"white"}}>
        <ItemImgcontainer>
          <ItemImg src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ItemImgcontainer>
        <ItemDetails>
        <Typography
          variant="subtitle2"
          style={{ marginBottom: "0" }}
        >
          chumin
        </Typography>
        <Typography
          variant="overline"
          style={{ marginBottom: "0" ,lineHeight:'20px'}}
         
        >
          ₹100
        </Typography>
        </ItemDetails>
        
        <ItemQuantity>
          <AiOutlinePlus />
          <ShowQuantity>
            <Typography variant="body1" display="block" gutterBottom>
              1
            </Typography>
          </ShowQuantity>
          <AiOutlineMinus />
        </ItemQuantity>
        <MdDelete style={{color:"red"}} />
      </ItemMenu>
      <ItemMenu style={{backgroundColor:"rgb(176, 116, 232)",color:"white"}}>
        <ItemImgcontainer>
          <ItemImg src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ItemImgcontainer>
        <ItemDetails>
        <Typography
          variant="subtitle2"
          style={{ marginBottom: "0" }}
        >
          chumin
        </Typography>
        <Typography
          variant="overline"
          style={{ marginBottom: "0" ,lineHeight:'20px'}}
         
        >
          ₹100
        </Typography>
        </ItemDetails>
        
        <ItemQuantity>
          <AiOutlinePlus />
          <ShowQuantity>
            <Typography variant="body1" display="block" gutterBottom>
              1
            </Typography>
          </ShowQuantity>
          <AiOutlineMinus />
        </ItemQuantity>
        <MdDelete style={{color:"red"}}/>
      </ItemMenu>
      <ItemMenu style={{backgroundColor:"rgb(176, 116, 232)",color:"white"}}>
        <ItemImgcontainer>
          <ItemImg src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </ItemImgcontainer>
        <ItemDetails>
        <Typography
          variant="subtitle2"
          style={{ marginBottom: "0" }}
        >
          chumin
        </Typography>
        <Typography
          variant="overline"
          style={{ marginBottom: "0" ,lineHeight:'20px'}}
         
        >
          ₹100
        </Typography>
        </ItemDetails>
        
        <ItemQuantity>
          <AiOutlinePlus style={{color:"red"}}/>
          <ShowQuantity>
            <Typography variant="body1" display="block" gutterBottom style={{borderColor:"white"}}>
              1
            </Typography>
          </ShowQuantity>
          <AiOutlineMinus style={{color:"red"}} />
        </ItemQuantity>
        <MdDelete style={{color:"red"}} />
      </ItemMenu>
    </AddedItemContainer>
  );
};

export default AddedItems;
