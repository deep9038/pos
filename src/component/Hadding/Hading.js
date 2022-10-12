import React, { useState } from "react";
import { Head, HeadLogo, HadingMau, HeadmenuItem } from "./HadingEliment";
import Logo from "../Matarial/Img/images.jpg";
import { FcAddDatabase } from "react-icons/fc";
import {BsClockHistory} from "react-icons/bs";
import Button from "@material-ui/core/Button";
import {IoFastFoodOutline} from 'react-icons/io5'
import AddOn from "./AddonModal/AddOn";
import {BiCategoryAlt} from 'react-icons/bi'
import AddCatagory from "./Addcatagory/AddCatagory";

const Hading = ({setAddItem}) => {
  const [ opencart,setOpenCart]=useState(false)
  const [ openAddon,setopenAddon]=useState(false)

  return (
    <Head>
      <HeadLogo src={Logo} />
      <HadingMau>
      <HeadmenuItem onClick={()=>setOpenCart(true)}>
      <Button
            variant="contained"
            color="primary"
            startIcon={<BiCategoryAlt/>}
            
          >
            Add Catagory
          </Button>
      </HeadmenuItem>
      {opencart?<AddCatagory setOpenCart={setOpenCart}/>:''}



      <HeadmenuItem onClick={()=>setopenAddon(true)}>
      <Button
            variant="contained"
            color="primary"
            startIcon={<IoFastFoodOutline/>}
            
          >
            Add Addon
          </Button>
      </HeadmenuItem>
      {openAddon? <AddOn setopenAddon={setopenAddon} />:''}
      
        <HeadmenuItem>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FcAddDatabase />}
            onClick={()=>setAddItem(true)}
          >
            Add Item
          </Button>
        </HeadmenuItem>
        <HeadmenuItem>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BsClockHistory/>}
          >
            History
          </Button>
        </HeadmenuItem>
      </HadingMau>
    </Head>
  );
};

export default Hading;
