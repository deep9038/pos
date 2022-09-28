import React from 'react'
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
const NoContect = (props) => {
  return (
    <Box style={{width:'100%',display:'flex',flexDirection:'column'}}>    
        <TextField
          label="Name"
          id="filled-size-small"
          defaultValue=""
          variant="filled"
          size="small"
          style={{marginBottom:'10px'}}
        />
        <TextField
          label="Number"
          id="filled-size-normal"
          defaultValue=""
          variant="filled"
          style={{marginBottom:'10px'}}
        />
        <Button variant="contained" component="label" style={{marginBottom:'10px',width:'100px',backgroundColor:'green'}} onClick={()=>props.setOpenCustomeradd(false)}>
            Save
        </Button>

    </Box>
  )
}

export default NoContect
