import React from 'react'

import "bootstrap/dist/css/bootstrap.css";
import IndivisualCatogaryItem from './IndivisualCatogaryItem';
const ShowCatogary = () => {
  return (
    <div style={{ position: "absolute",top:"200px",left:"51%",width:"350px",height:"100px",maxHeight:"250px",border:"1px solid black",transform:"TranslateX(-50%)",boxShadow:" 2px 8px 14px 0px rgb(0 0 0 / 75%)",boxSizing:"border-box",padding:"10px"}}>

    <IndivisualCatogaryItem/>
          
    </div>
  )
}

export default ShowCatogary
