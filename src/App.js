
import { useState } from 'react';
import './App.css';
import Body from './component/Body/Body';
import Foot from './component/Foot/Foot';
import Hading from './component/Hadding/Hading';
import ItemModal from './component/ItemModal/ItemModal';

function App() {
  const [openItrmModal,setOpenItemModal]=useState(false)
  const [addItem,setAddItem]=useState(false)
  return (
    <>
    <Hading setAddItem={setAddItem} />
    <Body OpenMod={setOpenItemModal} setOpenItemModal={setOpenItemModal} addItem={addItem} />
    <Foot/>
    {openItrmModal?<ItemModal setOpenItemModal={setOpenItemModal} />:""}
    </>
  );
}

export default App;
