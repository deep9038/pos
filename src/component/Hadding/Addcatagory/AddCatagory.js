import React, { useState } from "react";

import { Addcatagory, ImgInputContainerCatagory } from "./AddCatagoryEliment";
import IconButton from "@material-ui/core/IconButton";
import { FcCompactCamera } from "react-icons/fc";
import TextField from "@material-ui/core/TextField";
import FormButton from "../../FormButton";
import { FButton } from "../../FormButtonEliment";
import axios from "axios";
const AddCatagory = ({ setOpenCart }) => {
  const [catImag, setCatimge] = useState();
  const [catName, setCatName] = useState();
  const baseUrl = "http://192.168.29.146:2000";
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const handelsubmit = (e) => {
    e.preventDefault();
    setOpenCart(false);
    axios
      .post(`${baseUrl}/api/addCategory_post`, 
        {
          categoryName: catName,
          categoryImage: catImag,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response.data.message
          );
      });
  };

  return (
    // action='/api/addCategory_post' enctype="multipart/form-data" method='post'
    <Addcatagory
      method="post"
      action="/api/addCategory_post"
      onSubmit={handelsubmit}
    >
      <ImgInputContainerCatagory>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept=" image "
            type="file"
            onChange={(e) => setCatimge(e.target.files[0])}
          />
          <FcCompactCamera size={30} style={{ color: "greenyellow" }} />
        </IconButton>
        <TextField
          name="categoryName"
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
          label="Item Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
      </ImgInputContainerCatagory>

      <FButton type="submit" value="submit">
        Submit
      </FButton>
    </Addcatagory>
  );
};

export default AddCatagory;
