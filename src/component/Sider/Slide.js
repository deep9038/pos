// import data from "./teat.json"
// import Tag from "./tag";
  import Realcard from './Realcard'

// import gsap from "gsap";
// import Galdata from "../../../Collaction/Galdata";
// import carddata from "../../../Cardapi";
import "./Slid.css";

// import { useEffect } from "react";
const Slide = ({item,itemType}) => {
  //Slide click
  const getFilter = (a, b) => {
    if (!a,a==='All') {
      return b;
    } else {
      return b.filter((item) => item.type === a);
    }
  };
 
  const filterd = getFilter(itemType,item);
  return (
    <div className="App">
      <ul className="cat-slider" >
        {filterd.map((item) => {
          return <Realcard item={item} />;
        })}
      </ul>
    </div>
  );
};
export default Slide;
