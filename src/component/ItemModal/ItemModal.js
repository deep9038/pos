import React, { useEffect, useState } from "react";

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
const ItemModal = ({setOpenItemModal,modaldtaForcat,filtered}) => {
  const [itemType, setItemType] = useState("");

  const handelItemType = (type) => {
    setItemType(type);
    console.log(type);
  };
 
    
    return (
      <ModalContainer>
        <ModalBody>
          <ModalImgContainer>
            <ModalImage src={`http://127.0.0.1:2000${filtered.categoryImage[0].path.slice(6)}`} />
            <ModalImageText>
              <Typography
                variant="h4"
                gutterBottom
                style={{ marginLeft: "20px",color:'#000000a8;',letterSpacing:'2px' }}
              >
               {filtered.categoryName}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginLeft: "20px",color:'#000000a8;',letterSpacing:'2px'  }}
              >
                $344
              </Typography>
            </ModalImageText>
          </ModalImgContainer>
          <ItemTipeButton handelItemType={handelItemType} />
          {itemType ? <Slide modaldtaForcat={modaldtaForcat} itemType={itemType} /> : ""}
  
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
