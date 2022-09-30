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
const AddItem = ({ setAddItem }) => {
  const [age, setAge] = useState('');
  const [addItemData,setAddItemData]=useState({
    Image:'',
    itemName:'',
    itemCategory:'',
    itemPrice:'',
    itemtype:'',
    addOn:null
  })
  const handlPrice=(e)=>{
    if(e.target.value===Number){
      setAddItemData.itemPrice(e.target.value)
    }

  }
  const url = 'http://192.168.29.146:2000'
  const HandelPostAddItem=()=>{
    setAddItem(false)
    axios.post(`${url}/api/addItem_post`,{
    Image:addItemData.Image,
    itemName:addItemData.itemName,
    itemCategory:'tg9u9t5gr9',
    itemPrice:addItemData.itemPrice,
    itemtype:addItemData.itemtype
    }).then(res=>{
      console.log(res)
  })
  }
  
  const handleChange = (event) => {
    setAge(event.target.value);
    setAddItemData.itemtype(event.target.value)
  };
  return (
    <AddItemContainer    >
      <ImgInputContainer>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept=" image " type="file" onChange={(e)=>setAddItemData.Image(e.target.files[0])} />
          <FcCompactCamera size={30} />
        </IconButton>
        <TextField
        onChange={(e)=>setAddItemData.itemName(e.target.value)}
        value={addItemData.itemName}
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
            onChange={handlPrice}
            style={{ width: "40%" }}
            label="Price"
            value={5000}
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
              onChange={handleChange}
              label="Age"
              value={age}
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
            control={<Checkbox />}
            label="chatni"
            labelPlacement="end"
          />
          <FormControlLabel
            value="soce"
            control={<Checkbox />}
            label="soce"
            labelPlacement="end"
          />
          <FormControlLabel
            value="salad"
            control={<Checkbox />}
            label="salad"
            labelPlacement="end"
          />
          <FormControlLabel
            value="coconut"
            control={<Checkbox />}
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
