
  import Realcard from './Realcard'

import "./Slid.css";


const Slide = ({itemType,modaldtaForcat}) => {
  //Slide click
  const getFilter = (a, b) => {
    if (!a,a==='All') {
      return b;
    } else {
      return b.filter((item) => item.itemType === a);
    }
  };
 
  const filterd = getFilter(itemType,modaldtaForcat);
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
