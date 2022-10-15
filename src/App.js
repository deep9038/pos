import axios from "axios";
import { useEffect, useState } from "react";
// import './App5.css'
import './Mainstylr.css'
import Body from "./component/Body/Body";
import Foot from "./component/Foot/Foot";
import Hading from "./component/Hadding/Hading";
import ItemModal from "./component/ItemModal/ItemModal";

function App() {
  const [openItrmModal, setOpenItemModal] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [ctagoryes, setCtagoryes] = useState([]);
  const [addOn,setAddOn] = useState([]);

  const baseURLForCat = "http://192.168.29.146:2000/api/addCategory";
  const baseURLForAddOn = "http://192.168.29.146:2000/api/addOnItem";
  
  useEffect(() => {
    axios.get(baseURLForCat).then((res) => {
      console.log(res.data.result);
      setCtagoryes(res.data.result);
    });
    axios.get(baseURLForAddOn).then((res)=>{
      console.log(res.data.result);
      setAddOn(res.data.result)
    })
  }, []);

  
  return (
    <div className="maiDdiv">
      <Hading setAddItem={setAddItem} addItem={addItem}/>
      <Body
        OpenMod={setOpenItemModal}
        setOpenItemModal={setOpenItemModal}
        addItem={addItem}
        addOn={addOn}
        ctagoryes={ctagoryes}
        setAddItem={setAddItem}
      />
      <Foot />
      {openItrmModal ? <ItemModal setOpenItemModal={setOpenItemModal} /> : ""}
    </div>
  );
}

export default App;
