import React from 'react'
import IndivisualAddOnItem from './IndivisualAddOnItem'
import "bootstrap/dist/css/bootstrap.css";

const ShowAddOnItem = () => {
  return (
    <div style={{ position: "absolute",top:"260px",left:"65%",width:"350px",height:"100px",maxHeight:"250px",border:"1px solid black",transform:"TranslateX(-50%)",boxShadow:" 2px 8px 14px 0px rgb(0 0 0 / 75%)",boxSizing:"border-box",padding:"10px",zIndex:1,backgroundColor:"white"}}>

      <IndivisualAddOnItem/>
          
    </div>
  )
}

export default ShowAddOnItem
