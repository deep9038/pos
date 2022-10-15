import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import "bootstrap/dist/css/bootstrap.css";

const IndivisualAddOnItem = () => {
  return (
    <>
    <div className='items-info' style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                
                 <div className='title' height="50px" style={{fontSize:"10px"}}>
                     <span>Name</span><br></br>
                     <span>Category :-</span><br></br>
                     <span>West bengal Famous food</span><br></br>
                 </div>
                   
                 <div className='price'>
                    <h3>₹ 500.00</h3>
                </div>
                 
                 <div className='button-item' style={{width:"100px",display:"flex",justifyContent:"space-between"}}>
                    <button  className='btn btn-warning' width="100px" height="50px"> <AiFillEdit /></button>
                    <button  className='btn btn-danger'> <AiFillDelete /></button>
                     
                 </div>   
 
             </div>
    </>
  )
}

export default IndivisualAddOnItem
