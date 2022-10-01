import React, { useEffect, useState } from "react";
import { FootBody, Mony } from "./FootEliment";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {TbCurrencyRupee} from 'react-icons/tb'
import {BsPercent} from 'react-icons/bs'
const Foot = () => {
  
  const[mainValu,setMainValue]=useState() 
  const[chagValu,setChangValu]=useState()
  const[tax,setTax]=useState(10)
  const[payebel,setpayabel]=useState(500)
  const HandelAmount=(e)=>{
    setMainValue(e.target.value)
  }
  useEffect(()=>{
      setChangValu(mainValu-payebel)
  },[mainValu])
  return (
    <FootBody>
      <Mony>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ marginRight: "10px" }}
        >
          Deposit Amount-:
        </Typography>
        <TextField
        onChange={HandelAmount}
        style={{width:'60%'}}
          label="Recived from customer"
          value={mainValu}
          
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
      </Mony>
      <Mony>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ marginRight: "10px" }}
        >
          Chang Amount-:
        </Typography>
        <TextField
        style={{width:'50%'}}
          label="Customers Chang"
          value={chagValu}
          disabled
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
      </Mony>
      <Mony>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ marginRight: "10px" }}
        >
          Tax Amount-:
        </Typography>
        <TextField
        style={{width:'50%'}}
          label="Goverment Tax '%'"
          value={tax}
          disabled
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BsPercent size={23} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Mony>
      <Mony>
        <Typography
          variant="subtitle2"
          gutterBottom
          style={{ marginRight: "10px" }}
        >
          Paybel Amount-:
        </Typography>
        <TextField
        style={{width:'50%'}}
          label=" Payable for customer"
          value={payebel}
          disabled
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
      </Mony>

    </FootBody>
  );
};

export default Foot;
