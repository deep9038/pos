import React, { useState } from "react";
import { AddOnModalContainer } from "./AddOnEliment";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TbCurrencyRupee } from "react-icons/tb";
import Button from "@material-ui/core/Button";
import { FButton } from "../../FormButtonEliment";
import axios from "axios";
const AddOn = ({ setopenAddon }) => {
  const [addonName, setAddonName] = useState();
  const [addonPrice, setAddonPrice] = useState();
  const baseUrl = "http://192.168.29.146:2000";
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const handelAddonsubmit = (e) => {
    e.preventDefault();
    setopenAddon(false);
    axios
      .post(
        `${baseUrl}/api/addOnItem_post`,
        {
          addOnItemName: addonName,
          addOnItemPrice: addonPrice,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
     .catch(function (err){
      console.log(err);
     })
  };

  return (
    <AddOnModalContainer
      method="post"
      action="/api/addOnItem_post"
      onSubmit={handelAddonsubmit}
    >
      <TextField
        onChange={(e) => setAddonName(e.target.value)}
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
        type="number"
        value={addonPrice}
        onChange={(e) => setAddonPrice(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TbCurrencyRupee size={15} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <FButton type="submit" value="submit">
        Submit
      </FButton>
    </AddOnModalContainer>
  );
};

export default AddOn;
