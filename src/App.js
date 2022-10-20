import axios from "axios";
import { useEffect, useState } from "react";
// import './App5.css'
import "./Mainstylr.css";
import Body from "./component/Body/Body";
import Foot from "./component/Foot/Foot";
import Hading from "./component/Hadding/Hading";

function App() {
  const [addItem, setAddItem] = useState(false);
  const [ctagoryes, setCtagoryes] = useState([]);
  const [addOn, setAddOn] = useState([]);
  const [openAllItem, setOpenAllItem] = useState(false);
  const [item, setItem] = useState([]);
  const baseURL = "http://192.168.29.146:2000";

  useEffect(() => {
    axios.get(`${baseURL}/api/addCategory`).then((res) => {
      console.log(res.data.result);
      setCtagoryes(res.data.result);
    });
    axios.get(`${baseURL}/api/addOnItem`).then((res) => {
      console.log(res.data.result);
      setAddOn(res.data.result);
    });
    axios.get(`${baseURL}/api/Items`).then((res) => {
      console.log(res.data);
      setItem(res.data.result);
    });
  }, []);

  return (
    <div className="maiDdiv">
      <Hading setAddItem={setAddItem} addItem={addItem} />
      <Body
        setOpenAllItem={setOpenAllItem}
        openAllItem={openAllItem}
        addItem={addItem}
        addOn={addOn}
        item={item}
        ctagoryes={ctagoryes}
        setAddItem={setAddItem}
      />
      <Foot />
    </div>
  );
}

export default App;
