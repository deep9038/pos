import React from "react";
import { Head, HeadLogo, HadingMau, HeadmenuItem } from "./HadingEliment";
import Logo from "../Matarial/Img/images.jpg";
import { FcAddDatabase } from "react-icons/fc";
import {BsClockHistory} from "react-icons/bs";
import Button from "@material-ui/core/Button";
const Hading = ({setAddItem}) => {
  return (
    <Head>
      <HeadLogo src={Logo} />
      <HadingMau>
        <HeadmenuItem>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FcAddDatabase />}
            onClick={()=>setAddItem(true)}
          >
            Add Item
          </Button>
        </HeadmenuItem>
        <HeadmenuItem>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BsClockHistory/>}
          >
            History
          </Button>
        </HeadmenuItem>
      </HadingMau>
    </Head>
  );
};

export default Hading;
