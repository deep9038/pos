import React, { useState } from 'react'

import { Addcatagory, ImgInputContainerCatagory } from './AddCatagoryEliment'
import IconButton  from '@material-ui/core/IconButton'
import {FcCompactCamera} from 'react-icons/fc'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
const AddCatagory = ({setAddCat}) => {
  const[addcatPic,setAddCatPc]=useState()
  const[addCatName,setAddCatName]=useState()
  const handelimg=(e)=>{
    setAddCatPc(e.target.files[0])
    console.log(e.target.files);
  }
  const handelcatName=(e)=>{
    setAddCatName(e.target.value)
  }
  return (
    <Addcatagory>
       <ImgInputContainerCatagory>
      
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept=" image " type="file" onChange={handelimg}/>
          <FcCompactCamera size={30} style={{color:'greenyellow'}} />
        </IconButton>
        <TextField
          value={addCatName}
          onChange={handelcatName}
          label="Item Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
        </ImgInputContainerCatagory>

        
        <Button
        variant="contained"
        color="standard"
        onClick={()=>setAddCat(false)}
      >
        Success
      </Button>
    </Addcatagory>
  )
}

export default AddCatagory
