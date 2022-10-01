import React, { useState } from "react";

import { AddItemContainer, ImgInputContainer } from "./AddItemEliment";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { FcCompactCamera } from "react-icons/fc";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import { TbCurrencyRupee } from "react-icons/tb";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";
import AddOn from "../Hadding/AddonModal/AddOn";
const AddItem = ({ setAddItem }) => {
  const [additemImg,setAddItemIg]=useState()
  const [additemName,setAdditemName]=useState()
  const [additemPrice,setAddItemPrice]=useState()
  const [addItemType,setItemType]=useState()
  const [addAdon,setAddAddon]=useState([])
  const handlitemTye =(e)=>{
    setItemType(e.target.value)
    console.log(e.target.value);
  }
  const handelcheboxdta = (e)=>{
    let ischerd=e.target.checked
    if(ischerd){
      setAddAddon([...addAdon,e.target.value])
    }else{
      setAddAddon(
        addAdon.filter((item)=>item !== item)
      )
    }
  }


  const HandelPostAddItem=()=>{
       
  }
 
  return (
    <AddItemContainer    >
      <ImgInputContainer>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept=" image " type="file" onChange={(e)=>setAddItemIg(e.target.files[0])}/>
          <FcCompactCamera size={30} />
        </IconButton>
        <TextField
        onChange={(e)=>setAdditemName(e.target.value)}
        value={additemName}
          label="Item Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
      </ImgInputContainer>
      <ImgInputContainer>
        <FormControl
          variant="standard"
          style={{
            marginBottom: "1rem",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            onChange={(e)=>setAddItemPrice(e.target.value)}
            style={{ width: "40%" }}
            label="Price"
            value={additemPrice}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TbCurrencyRupee size={23} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <FormControl style={{width:'40%'}}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handlitemTye}
              label="Age"
              value={addItemType}
            >
              <MenuItem value={'Veg'} >Veg</MenuItem>
              <MenuItem  value={'Non-Veg'}>Non-Veg</MenuItem>
              
            </Select>
          </FormControl>
        </FormControl>
      </ImgInputContainer>
      <FormControl component="fieldset">
        <FormLabel component="legend">Addon Item</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            
            value="chatni"
            control={<Checkbox value='chatni' onChange={handelcheboxdta}/>}
            label="chatni"
            labelPlacement="end"
          />
          <FormControlLabel
           
            value="soce"
            control={<Checkbox value='soce' onChange={handelcheboxdta} />}
            label="soce"
            labelPlacement="end"
          />
          <FormControlLabel
           
            value="salad"
            control={<Checkbox value='salad' onChange={handelcheboxdta} />}
            label="salad"
            labelPlacement="end"
          />
          <FormControlLabel
           
            value="coconut"
            control={<Checkbox value='coconut' onChange={handelcheboxdta}/>}
            label="coconut"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>

      <Button
        variant="contained"
        color="standard"
        onClick={ HandelPostAddItem}
      >
        Success
      </Button>
    </AddItemContainer>
  );
};

export default AddItem;
