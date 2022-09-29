import React from "react";
import { AddOnModalContainer } from "./AddOnEliment";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TbCurrencyRupee } from "react-icons/tb";
import Button from "@material-ui/core/Button";
const AddOn = ({setopenAddon}) => {
  return (
    <AddOnModalContainer>
      <TextField
        id="outlined-basic"
        label="Addon Name"
        variant="outlined"
        color="success"
        style={{ width: "100%", marginBottom: "15px" }}
      />
      <TextField
        style={{ marginBottom: "10px" }}
        label="Price"
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
