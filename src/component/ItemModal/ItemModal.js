import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import ItemTipeButton from "./ItemTipeButton";
import Button from "@material-ui/core/Button";
import {AiOutlineClose} from 'react-icons/ai'
import {
  ModalBody,
  ModalContainer,
  ModalImgContainer,
  ModalImage,
  ModalImageText,
  AddonSlider,
  AddonItems,
  TotalCostcontainer,
} from "./ItemModalEliment";
import Slide from "../Sider/Slide";
import IconButton from '@material-ui/core/IconButton';
const ItemModal = ({setOpenItemModal}) => {
  const [itemType, setItemType] = useState("");
  const [item, setItem] = useState([
    {
      id: 1,
      type: "Veg",
      Name: "FishFry",
      Price: "50",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/close-up-of-a-fish-and-chips-platter-with-dipping-sauce-picture-id182690390?b=1&k=20&m=182690390&s=170667a&w=0&h=YCRD3Qe2FnRHeGr7Rf7JWqZnRv13b0nn0UELFM6g0dk=",
    },
    {
      id: 2,
      type: "Non-Veg",
      Name: "Chatni",
      Price: "10",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/indian-chatni-image-close-up-picture-id1361909046?b=1&k=20&m=1361909046&s=170667a&w=0&h=NyGl8tngJ50QXJa5r9tJFlbUKC_ndghvXiiYp3099_o=",
    },
    {
      id: 3,
      type: "Non-Veg",
      Name: "Choumin",
      Price: "70",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/homemade-indochinese-recipe-schezwan-noodles-or-vegetable-hakka-or-picture-id1399868627?b=1&k=20&m=1399868627&s=170667a&w=0&h=puPRhSg3rFqrhQbo92ZkBhFPOE4Jwg_1nuffsY9xSW8=",
    },
    {
      id: 4,
      type: "All",
      Name: "biriany",
      Price: "200",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/chicken-biriyani-picture-id1345624336?b=1&k=20&m=1345624336&s=170667a&w=0&h=twUdtaXYy5VPB0-tdRHcqgC4C5WNSFUgcNBPILowg5g=",
    },
    {
      id: 5,
      type: "Veg",
      Name: "Rosted Chiken",
      Price: "500",
      Availability: true,
      Image:
        "https://media.istockphoto.com/photos/whole-rosted-chicken-with-cranberry-sauce-on-white-plate-on-wooden-picture-id1075355440?b=1&k=20&m=1075355440&s=170667a&w=0&h=C1V0AgiGxGx3TOlPhdlB8uIbY0MBAJTPmpTJNXRgtVA=",
    },
  ]);
  const handelItemType = (type) => {
    setItemType(type);
    console.log(type);
  };
  return (
    <ModalContainer>
      <ModalBody>
        <ModalImgContainer>
          <ModalImage src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
          <ModalImageText>
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginLeft: "20px" }}
            >
              fishFry
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginLeft: "20px" }}
            >
              $344
            </Typography>
          </ModalImageText>
        </ModalImgContainer>
        <ItemTipeButton handelItemType={handelItemType} />
        {itemType ? <Slide item={item} itemType={itemType} /> : ""}

        <Typography variant="h4">Addon</Typography>
        <AddonSlider>
          <AddonItems>
            <h6 style={{ margin: "0" }}>salad</h6>
            <p style={{ margin: "0" }}>(300)</p>
          </AddonItems>
        </AddonSlider>
        <TotalCostcontainer>
          <h4 style={{ margin: "10px 10px",display:'inline-block' }}>
            TotalCost :- <h2>$400</h2>{" "}
          </h4>
          <Button variant="contained" color="primary" style={{marginRight:'20px'}}>Add</Button>
        </TotalCostcontainer>

        <IconButton aria-label="back" style={{position:'absolute',top:'1rem',right:'1rem'  }} onClick={()=>setOpenItemModal(false)} size="large">
  <AiOutlineClose />
</IconButton>
      </ModalBody>


    </ModalContainer>
  );
};

export default ItemModal;
