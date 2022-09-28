import React from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
function ItemButtons() {
  return (
    <Box style={{display:'flex',flexDirection:'row',justifyContent:'space-between', marginTop:'1rem'}}>
    <Button variant="contained" color="secondary">
        Clere
      </Button>
      <Button variant="contained" color="primary">
      Order
    </Button>
    </Box>
  )
}

export default ItemButtons
