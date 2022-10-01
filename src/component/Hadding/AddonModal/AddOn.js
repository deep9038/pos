import React, { useState } from "react";
import { AddOnModalContainer } from "./AddOnEliment";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TbCurrencyRupee } from "react-icons/tb";
import Button from "@material-ui/core/Button";
const AddOn = ({setopenAddon}) => {
  const [addonName,setAddonName]=useState()
  const [addonPrice,setAddonPrice]=useState()
  const handelName=(e)=>{
    setAddonName(e.target.value)
    console.log(e.target.value);
  }
  const handelprice=(e)=>{
    setAddonPrice(e.target.value)
    console.log(e.target.value);
  }
  return (
    <AddOnModalContainer>
      <TextField
      onChange={handelName}
        id="outlined-basic"
        label="Addon Name"
        variant="outlined"
        color="success"
        value={addonName}
        style={{ width: "100%", marginBottom: "15px" }}
      />
      <TextField
        style={{ marginBottom: "10px" }}
        label="Price"
        value={addonPrice}
        onChange={handelprice}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TbCurrencyRupee size={15} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Button variant="contained" color="secondary" onClick={()=>setopenAddon(false)} >
        save
      </Button>
    </AddOnModalContainer>
  );
};

export default AddOn;
